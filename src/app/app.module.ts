import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { Router ,RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductComponent } from './component/product/product.component';
import { ProductCategoryComponent } from './component/product-category/product-category.component';
import { WelcomeComponent } from './component/welcome/welcome.component';


const route : Routes =[

  {path : '' , component : WelcomeComponent},
  {path : 'Products' , component : ProductComponent},
  {path : 'ProductsCategory' , component : ProductCategoryComponent}
  

]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductCategoryComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(route),
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
