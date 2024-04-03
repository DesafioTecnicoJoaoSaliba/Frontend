import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {ProdutoDTO} from "./api/produtoDTO";
import {Page} from "./api/Page";
import {ɵFormGroupRawValue, ɵTypedOrUntyped} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private uri = 'http://localhost:8080/produto';

  constructor(   private httpClient: HttpClient,) { }

  getProductList(page = 0, size = 0, nome:string) {
     let params = new HttpParams()
    params= params.append("page",page)
    params= params.append("size",size)
    params= params.append("size",size)
    if(!!nome){
      params= params.append("nome",nome)

    }

    return this.httpClient.get<Page<ProdutoDTO>>(this.uri, {params})
  }

  deleteProduto(id) {
  return  this.httpClient.delete(`${this.uri}/${id}`)
  }

  save(produto: ProdutoDTO) {
    return this.httpClient.post<ProdutoDTO>(this.uri, produto)

  }

  getProdutoById(id: number) {
    return  this.httpClient.get(`${this.uri}/${id}`)
  }
}
