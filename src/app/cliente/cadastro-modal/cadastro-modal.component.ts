import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CadastroComponent } from 'src/app/orcamento/cadastro/cadastro.component';
import { Cliente } from 'src/app/orcamento/dto/cliente';
import { ClienteService } from '../cliente.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.css']
})
export class CadastroModalComponent {

  clienteRegisterFormGroup = this._formBuilder.group({
    nome: [null, [Validators.required, Validators.minLength(1)]],
    identificacao: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(11)]],
    email: [null, [Validators.required, Validators.email]],
    telefone: [null, 
      [
        Validators.required,
        Validators.pattern("^\\+?55\\s?\\(?\\d{2}\\)?\\s?\\d{4,5}-?\\d{4}$|^\\(?\\d{2}\\)?\\s?\\d{4,5}-?\\d{4}$")
      ]
    ],
    endereco: [null, [Validators.required, Validators.maxLength(50)]],
  });

  constructor( public dialogRef: MatDialogRef<CadastroComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Cliente,
      private _formBuilder: FormBuilder,
      private _snackBar: MatSnackBar,
      private clienteService: ClienteService
    ) 
  {
  }

  onSubmit(formDirective: FormGroupDirective){

    this.clienteService.save(this.clienteRegisterFormGroup.value);

    this.clienteRegisterFormGroup.reset();
    formDirective.resetForm(); 
    this.openSnackBar();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage(inputName: string) {
    const control = this.clienteRegisterFormGroup.get(inputName);
    
    if (control?.hasError('required')) {
      return 'O valor é obrigatório.';
    }
    
    if (control?.hasError('email')) {
      return 'E-mail inválido.';
    }

    if (control?.hasError('minlength')) {
      const requiredLength = control?.errors?.['minlength']?.requiredLength;
      return `O valor deve ter pelo menos ${requiredLength} caracteres.`;
    }

    if (control?.hasError('maxlength')) {
      const requiredLength = control?.errors?.['maxlength']?.requiredLength;
      return `O valor deve ter no máximo ${requiredLength} caracteres.`;

    }

    if (control?.hasError('pattern')) {
      return 'Formato Inválido';
    }

    return null;
  }

  openSnackBar() {
    this._snackBar.open("Cliente Registrado", "✔️",{ duration: 5000});
  }

}
