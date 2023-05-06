import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { CheckOutComponent } from './check-out/check-out.component';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule, MyRouting } from './app-routings--module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductRepresentComponent } from './product-represent/product-represent.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MainPageComponent,
    CheckOutComponent,
    ProductRepresentComponent,
MyRouting,
TestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
