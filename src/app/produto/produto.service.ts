import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private uri = 'http://localhost:8080/produto';

  constructor() { }
}
