import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FlaskapiService } from '../flaskapi.service';

@Component({
  selector: 'app-user-ticket-dashboard',
  templateUrl: './user-ticket-dashboard.component.html',
  styleUrls: ['./user-ticket-dashboard.component.css']
})
export class UserTicketDashboardComponent {
  constructor(private router: Router,private snackBar: MatSnackBar,private flaskapiservice:FlaskapiService){}
  title:string;
  status:string;
  email_value:String;
  description:string;
  user_id:string;
  priority:string;
  category:string;
  email = new FormControl('', [Validators.required, Validators.email]);
  isCorrect: boolean = true;

  ngOnInit()
  {
   this.email_value="";
   this.status="";
   this.title="";  
   this.description="";
   this.user_id="";
   this.priority="";
   this.category="";
  }

  getErrorMessage() 
  {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
 
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  raise_ticket()
  { 
    if(this.user_id == '')
    {
    this.snackBar.open("User Id cannot be empty !", "OK",
    {
      duration:4000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
    })
    }
    else if(this.email.value == '')
   {
     this.snackBar.open("Email Id cannot be empty !", "OK",
     {
       duration:4000,
       verticalPosition: 'top',
       horizontalPosition: 'center', 
     })
   }

   else if(this.title == '')
   {
     this.snackBar.open("Title cannot be empty !", "OK",
     {
       duration:4000,
       verticalPosition: 'top',
       horizontalPosition: 'center',
     })
   }
   else if(this.priority == '')
   {
     this.snackBar.open("Priority cannot be empty !", "OK",
     {
       duration:4000,
       verticalPosition: 'top',
       horizontalPosition: 'center',
     })
   }

   else if(this.category == '')
   {
     this.snackBar.open("Category cannot be empty !", "OK",
     {
       duration:4000,
       verticalPosition: 'top',
       horizontalPosition: 'center',
     })
   }

   else if(this.description == '')
   {
     this.snackBar.open("Description cannot be empty !", "OK",
     {
       duration:4000,
       verticalPosition: 'top',
       horizontalPosition: 'center',
     })
   }


   else
   {
    this.flaskapiservice.insert_user_data(this.user_id,this.email_value,this.title,this.priority,this.category,this.description,this.status)
      .subscribe((response)=>{
         console.log(response);
        if(response == "Ticket raised")
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

  logout()
  {
    this.router.navigate(['/']);
    this.snackBar.open("Logout Successful !", "",
    {
      duration:4000,
      verticalPosition: 'top',
      horizontalPosition: 'center',
       
    }) 
  }

  check_status()
  {
    
    this.flaskapiservice.check(this.user_id)
      .subscribe((response)=>{
        // console.log(response);
        if(response == "accepted")
        {
          this.isCorrect=true;
        }
        else
        {
          this.isCorrect=false;
        }
        
      
      (error) => {                              
        this.snackBar.open("Something went wrong! Please try again later", "OK",
        {
        duration:4500,
        verticalPosition: 'top',
        horizontalPosition: 'center', 
        })
        }
      }
      )

  }

}
