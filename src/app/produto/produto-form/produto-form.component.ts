import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ProdutoService} from "../produto.service";
import {ActivatedRoute, Router} from "@angular/router";

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

  constructor(private readonly produtoService:ProdutoService,
              private readonly  aRouter: ActivatedRoute,
              private  readonly router: Router) {
   const id =this.aRouter.snapshot.params['id']
   const view =this.aRouter.snapshot.data['view']
    if(!!id){
      this.isCadastro =false
      this.productForm.get('id').setValue(id)
      this.getProdutoById(id)
    }
    if(view)
    this.productForm.disable()

  }

  onSave() {
    this.produtoService.save(this.productForm.getRawValue()).subscribe(value => {
      this.productForm.patchValue(value)
      this.redirectToList()
    })

  }

  private getProdutoById(id: number) {
    this.produtoService.getProdutoById(id).subscribe(value => {
      this.productForm.patchValue(value)
    })

  }

  redirectToList(){
    this.router.navigate(['produto','list'])
  }
}
