import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DashboardInfo } from '../dto/dashboard';
import { OrcamentoService } from '../orcamento.service';
import { MatTableDataSource } from '@angular/material/table';
import { OrcamentosTabela } from '../dto/orcamentoTabela';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements AfterViewInit {

  dashboardInfo :DashboardInfo;
  orcamentosTabela :OrcamentosTabela[];
  displayedColumns: string[] = ['data','titulo', 'cliente', 'valor', 'status', 'acoes'];
  dataSource: MatTableDataSource<OrcamentosTabela>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(orcamentoService:OrcamentoService){
    this.dashboardInfo = orcamentoService.getDataDashboard();
    this.orcamentosTabela = orcamentoService.getOrcamentos();
    this.dataSource = new MatTableDataSource(this.orcamentosTabela);

  }

  ngAfterViewInit() {
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

}
