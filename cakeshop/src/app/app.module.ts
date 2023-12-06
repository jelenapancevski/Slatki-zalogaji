import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { PasswordComponent } from './password/password.component';
import { UpdatedataComponent } from './updatedata/updatedata.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { PromotionsComponent } from './promotions/promotions.component';
import { BasketComponent } from './basket/basket.component';
import { ProductsComponent } from './products/products.component';
import { CakesComponent } from './cakes/cakes.component';
import { DessertsComponent } from './desserts/desserts.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { OrderComponent } from './order/order.component';
import { AddproductComponent } from './addproduct/addproduct.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
/* 

;
import {LayoutModule} from '@angular/cdk/layout';
;
import {MatGridListModule} from '@angular/material/grid-list';
;
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


;
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatRadioModule} from '@angular/material/radio';

import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

import {MatExpansionModule} from '@angular/material/expansion';

import {MatMenuModule} from '@angular/material/menu';

*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    PasswordComponent,
    UpdatedataComponent,
    HomepageComponent,
    ContactComponent,
    NotificationsComponent,
    PromotionsComponent,
    BasketComponent,
    ProductsComponent,
    CakesComponent,
    DessertsComponent,
    ProductComponent,
    OrdersComponent,
    OrderComponent,
    AddproductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatCardModule,
    MatSelectModule,
    /*BrowserAnimationsModule,
    ,
    ,
    LayoutModule,
    
    MatGridListModule,
    ,
    MatDatepickerModule,
    MatNativeDateModule,
   
    NgxMatTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatNativeDateModule,
   
    MatCheckboxModule,
    MatRadioModule,
    NgbModule,
    MatTabsModule,
    MatTableModule,
    MatExpansionModule,
    MatMenuModule,*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
