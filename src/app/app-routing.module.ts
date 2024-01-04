import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserTicketDashboardComponent } from './user-ticket-dashboard/user-ticket-dashboard.component';
import { AdminTicketDashboardComponent } from './admin-ticket-dashboard/admin-ticket-dashboard.component';
import { UpdateStatusComponent } from './update-status/update-status.component';


const routes: Routes = [
  {
    path:'',component:LoginComponent
  },
  {
    path:'admin-signup',component:AdminSignupComponent
  },
  {
    path:'user-signup',component:UserSignupComponent
  },
  {
    path:'user-ticket-dashboard',component:UserTicketDashboardComponent
  },
  {
    path:'admin-ticket-dashboard',component:AdminTicketDashboardComponent
  },
  {
    path:'update-status',component:UpdateStatusComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
