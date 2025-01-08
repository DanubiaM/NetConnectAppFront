import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CadastroComponent } from 'src/app/orcamento/cadastro/cadastro.component';
import { Cliente } from 'src/app/orcamento/dto/cliente';


@Component({
  selector: 'app-cadastro-modal',
  templateUrl: './cadastro-modal.component.html',
  styleUrls: ['./cadastro-modal.component.css']
})
export class CadastroModalComponent {

  email = new FormControl('', [Validators.required, Validators.email]);

  clienteRegisterFormGroup = this._formBuilder.group({
    nome: [null, Validators.required],
    identificao: [null, Validators.required],
    email: [null, Validators.required],
    telefone: [null, Validators.required],
    endereco: [null, Validators.required],
  });

  constructor( public dialogRef: MatDialogRef<CadastroComponent>,
     @Inject(MAT_DIALOG_DATA) public data: Cliente,
      private _formBuilder: FormBuilder,
    ) 
  {
  }

  onSubmit(){
    console.log("here")
    console.warn(this.clienteRegisterFormGroup.value);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


}
