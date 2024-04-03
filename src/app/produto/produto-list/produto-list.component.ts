import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ProdutoListDataSource, ProdutoListItem } from './produto-list-datasource';
import {ProdutoService} from "../produto.service";
import {ProdutoDTO} from "../api/produtoDTO";

@Component({
  selector: 'app-produto-list',
  templateUrl: './produto-list.component.html',
  styleUrls: ['./produto-list.component.scss']
})
export class ProdutoListComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatTable) table!: MatTable<ProdutoDTO>;
  dataSource = new ProdutoListDataSource();

  displayedColumns = [ 'nome','valor','dthCriacao', 'acoes'];
  pageIndex: number =0;
  pageSize: number  =10;
  totalElements: number=0;

  constructor(private  readonly produtoService:ProdutoService) {
  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.refresh()
  }

  refresh($event: PageEvent={length:0,pageIndex:this.pageIndex,pageSize:this.pageSize}) {
    this.produtoService.getProductList($event.pageIndex,$event.pageSize).subscribe(value => {
      this.table.dataSource = value.content
      this.totalElements = value.totalElements
    })
  }


  deleteProduto(id) {
    this.produtoService.deleteProduto(id).subscribe(value => this.refresh())
  }




  formatDate(dateString: string): string {

    const date = new Date(dateString);
    const day = this.pad(date.getDate());
    const month = this.pad(date.getMonth() + 1);
    const year = date.getFullYear();
    const hours = this.pad(date.getHours());
    const minutes = this.pad(date.getMinutes());
    const seconds = this.pad(date.getSeconds());
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  }

  private pad(value: number): string {
    return value < 10 ? '0' + value : value.toString();
  }
}
