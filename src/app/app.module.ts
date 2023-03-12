import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WellcomeComponent } from './wellcome/wellcome.component';
import { LoginComponent } from './login/login.component';
import { ToDoComponent } from './to-do/to-do.component';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routings--flat.module';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { LogoutComponent } from './logout/logout.component';
import {HttpClientModule} from '@angular/common/http'
import { UpdateDeleteComponent } from './update-delete/update-delete.component';
import { TestModuleModule } from './test-module/test-module.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WellcomeComponent,
    LoginComponent,
    ToDoComponent,
    TopMenuComponent,
    FooterComponent,
    ErrorMsgComponent ,
    LogoutComponent,UpdateDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
