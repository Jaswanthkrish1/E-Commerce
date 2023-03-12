import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardSevrService } from './service/route-guard-sevr.service';
import { ToDoComponent } from './to-do/to-do.component';
import { UpdateDeleteComponent } from './update-delete/update-delete.component';
import { WellcomeComponent } from './wellcome/wellcome.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'wellcome/:name',component:WellcomeComponent,canActivate:[RouteGuardSevrService]},
  {path:'todo',component:ToDoComponent,canActivate:[RouteGuardSevrService]},
  {path:'todo/:id',component:UpdateDeleteComponent,canActivate:[RouteGuardSevrService]},

  {path:'logout',component:LogoutComponent},
  {path:'**',component:ErrorMsgComponent}
];
@NgModule({
 imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(){}
 }
