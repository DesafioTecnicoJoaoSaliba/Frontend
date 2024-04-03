import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProdutoFormComponent} from "./produto-form/produto-form.component";
import {ProdutoListComponent} from "./produto-list/produto-list.component";

const routes: Routes = [
  {
    component: ProdutoListComponent,
    path:'list',
  },
  {
    component: ProdutoFormComponent,
    path:'cadastro',
  },
  {
    component: ProdutoFormComponent,
    path:'edit/:id',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
