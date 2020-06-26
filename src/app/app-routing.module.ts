import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { EcommerceHomeComponent } from './components/ecommerce-home/ecommerce-home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'show-list', component: ListComponent },
  { path: 'ecommerce-home', component: EcommerceHomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }