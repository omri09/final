import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import {ListComponent } from './components/list/list.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LoadingBarRouterModule,
    ReactiveFormsModule
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { 

}
