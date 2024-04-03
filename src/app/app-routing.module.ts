import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponetComponent } from './screen/layout-componet/layout-componet.component';
import { UserModule } from './user/user.module';
import {ProdutoModule} from "./produto/produto.module";

const routes: Routes = [
  { path: '', loadChildren: () => UserModule },
  {
    path: '',
    component: LayoutComponetComponent,
    children: [{ path: 'produto', loadChildren: () => ProdutoModule }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
