import { Element } from '@angular/compiler';
import { AfterViewInit, Component, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements AfterViewInit {
    @Input('colunas') nomeColunas!: string[];
    @Input('data') data: any;
    @Input('titulo') titulo: string = "some title";
    @Input('subtitulo') subtitulo: string = "some subtitle";
    colunasComAcao! : string[];

    dataSource!: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator)
    paginator!: MatPaginator;
    @ViewChild(MatSort)
    sort!: MatSort;
  

    @Output() idSelecionado = new EventEmitter();
  
    ngAfterViewInit() {

      this.dataSource = new MatTableDataSource(this.data);
      this.colunasComAcao = [...this.nomeColunas, "action"];
      
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
  
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    onSearchButtonClick(id: any) {
     
      this.idSelecionado.emit(id);
    
    }
  }
  
  