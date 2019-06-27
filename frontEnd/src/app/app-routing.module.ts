import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { CreateComponent } from './products/create/create.component';
import { ShoweditComponent } from './products/showedit/showedit.component';
import { AllComponent } from './products/all/all.component';
import { HomeComponent } from './products/home/home.component';

const routes: Routes = [
  {path: "products", component: ProductsComponent, children: [
    {path: "home", component: HomeComponent},
    {path: "all", component: AllComponent},
    {path: "create", component: CreateComponent},
    {path: "showedit/:id", component: ShoweditComponent}
    // {path: "delete/:id", component: DeleteComponent},
    // {path: "show/:id", component: ShowComponent},
    // {path: "edit/:id", component: EditComponent}
  ]},
  {path: "", pathMatch: "full", redirectTo: "/products/home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
