import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import {ListComponent } from './components/list/list.component';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import {HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './components/home/home.component';
import { EcommerceHomeComponent } from './components/ecommerce-home/ecommerce-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {MatNativeDateModule} from '@angular/material/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    HomeComponent,
    EcommerceHomeComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    LoadingBarRouterModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
  MatNativeDateModule,
  NgbModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]

  
})
export class AppModule { 

}
