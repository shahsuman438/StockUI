import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableStockComponent } from './available-stock/available-stock.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';

const routes: Routes = [
  {
      path:'',redirectTo:'dashboard',pathMatch:'full'
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },
  {
    path:'Transaction',
    component:TransactionComponent
  },
  {
    path:'AvlStock',
    component:AvailableStockComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
