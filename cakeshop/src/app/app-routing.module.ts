import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CakesComponent } from './cakes/cakes.component';
import { DessertsComponent } from './desserts/desserts.component';
import { ProfileComponent } from './profile/profile.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { BasketComponent } from './basket/basket.component';
import { ContactComponent } from './contact/contact.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { OrderComponent } from './order/order.component';
import { OrdersComponent } from './orders/orders.component';
import { PasswordComponent } from './password/password.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
{path:'addproduct',component:AddproductComponent},
{path:'basket',component:BasketComponent},
{path:'cakes',component:CakesComponent},
{path:'contact',component:ContactComponent},
{path:'desserts',component:DessertsComponent},
{path:'', component:HomepageComponent},
{path:'login',component:LoginComponent},
{path:'notifications',component:NotificationsComponent},
{path:'orders',component:OrdersComponent},
{path:'product',component:ProductComponent},
{path:'profile',component:ProfileComponent},
{path:'promotions',component:PromotionsComponent},
{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
