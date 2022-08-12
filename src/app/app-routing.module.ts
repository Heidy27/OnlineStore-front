import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{path:"login",component:LoginComponent},{path:"register",component:RegisterComponent},{path:"home",component:HomeComponent},{path:"navbar",component:NavbarComponent},{path:"about",component:AboutComponent},{path:"product",component:ProductComponent},{path:"shopping-cart",component:ShoppingCartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
