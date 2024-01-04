import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {MatSelectModule} from '@angular/material/select';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { AdminSignupComponent } from './admin-signup/admin-signup.component';
import { UserTicketDashboardComponent } from './user-ticket-dashboard/user-ticket-dashboard.component';
import { AdminTicketDashboardComponent } from './admin-ticket-dashboard/admin-ticket-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateStatusComponent } from './update-status/update-status.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PageNotFoundComponent,
    UserSignupComponent,
    AdminSignupComponent,
    UserTicketDashboardComponent,
    AdminTicketDashboardComponent,
    UpdateStatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatSelectModule,
    HttpClientModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
