import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FlaskapiService } from '../flaskapi.service';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css']
})
export class AdminSignupComponent {
  hide=true;
  password_value:String;
  email_value:String;
  email = new FormControl('', [Validators.required, Validators.email]);
  who_is_logging_in:String;
  
  
  constructor(private router: Router,private snackBar: MatSnackBar,private flaskapiservice:FlaskapiService){}
 
  ngOnInit()
  {
   this.password_value="";
   this.email_value="";
   this.who_is_logging_in="";
  }
 
  getErrorMessage() 
  {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
 
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  signup()
  {
    if(this.email.value == '')
   {
     this.snackBar.open("Email Id cannot be empty !", "OK",
     {
       duration:4000,
       verticalPosition: 'top',
       horizontalPosition: 'center', 
     })
   }

   else if(this.password_value == '')
   {
     this.snackBar.open("Password cannot be empty !", "OK",
     {
       duration:4000,
       verticalPosition: 'top',
       horizontalPosition: 'center',
     })
   }
   else
   {
    this.flaskapiservice.admin_signup(this.email_value,this.password_value)
      .subscribe((response)=>{
         console.log(response);
        if(response == "success")
        {
          this.router.navigate(['/']);
        }
        else
        {
          this.router.navigate(['/']);
          this.snackBar.open("Signup successful", "OK",
          {
           duration:4000,
           verticalPosition: 'top',
           horizontalPosition: 'center',
          }
          );
        }
      },
      
      (error) => {                              
        this.snackBar.open("Something went wrong! Please try again later", "OK",
        {
        duration:4500,
        verticalPosition: 'top',
        horizontalPosition: 'center', 
        })
        }
      )

   }

  }

}
