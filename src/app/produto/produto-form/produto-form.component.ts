import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProdutoService} from "../produto.service";

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    nome: new FormControl(),
    descricao: new FormControl(),
    valor: new FormControl(),
    dthCriacao: new FormControl(),
  }) ;

  readonly options={
    prefix:"R$",
    thousands:'.',
    decimal:','
  };
  isCadastro: boolean =true;

  constructor(private readonly produtoService:ProdutoService) {

  }

  onSave() {
    this.produtoService.save(this.productForm.getRawValue()).subscribe(value => {
      this.productForm.patchValue(value)
    })

  }
}
