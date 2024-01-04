import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FlaskapiService } from '../flaskapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
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
 
  login()
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
    if(this.who_is_logging_in == "user")
    {
      
      this.flaskapiservice.signin_user(this.email_value,this.password_value)
      .subscribe((response)=>{
         console.log(response);
        if(response == "valid login")
        {
          this.router.navigate(['/user-ticket-dashboard']);
        }
        else if(response == "password is incorrect")
        {
          this.snackBar.open(response.toString(), "OK",
          {
           duration:4000,
           verticalPosition: 'top',
           horizontalPosition: 'center',
          }
          );
        }
        else
        {
          this.snackBar.open(response.toString(), "OK",
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

    else
    {
      this.flaskapiservice.signin_admin(this.email_value,this.password_value)
      .subscribe((response)=>{
        // console.log(response);
        if(response == "valid login")
        {
          this.router.navigate(['/admin-ticket-dashboard']);
        }
        else if(response == "password is incorrect")
        {
          this.snackBar.open(response.toString(), "OK",
          {
           duration:4000,
           verticalPosition: 'top',
           horizontalPosition: 'center',
          }
          );
        }
        else
        {
          this.snackBar.open(response.toString(), "OK",
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
 
  reset()
  {
   this.password_value="";
   this.email_value="";
  }

  signup()
  {
   if(this.who_is_logging_in == '')
   {
     this.snackBar.open("Role cannot be empty !", "OK",
     {
       duration:4000,
       verticalPosition: 'top',
       horizontalPosition: 'center',
     })
   }
   else{
    if(this.who_is_logging_in == "user")
    {
      this.router.navigate(['/user-signup']);
    }
    else
    {
      this.router.navigate(['/admin-signup']);
    }

  }
}

}
