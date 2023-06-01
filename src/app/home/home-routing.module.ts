import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "@app/home/home.component";
import {CreateNewOrderComponent} from "@app/home/create-new-order/create-new-order.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [{
      path: '',
      component: CreateNewOrderComponent
    }]
  },
  {path: '', pathMatch: 'full', component: CreateNewOrderComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
