import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FlaskapiService } from '../flaskapi.service';

@Component({
  selector: 'app-admin-ticket-dashboard',
  templateUrl: './admin-ticket-dashboard.component.html',
  styleUrls: ['./admin-ticket-dashboard.component.css']
})
export class AdminTicketDashboardComponent {
  tableData:string;
  user_id:string;
  constructor(private router: Router,private snackBar: MatSnackBar,private flaskapiservice:FlaskapiService){}
  ngOnInit()
  {
    this.user_id="12";
    this.flaskapiservice.admin_data()
    .subscribe((response)=>{
       this.tableData=JSON.stringify(response);
       this.snackBar.open("All details displayed", "OK",
      {
      duration:4500,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
      })
      
      
    },
    
    (error) => {                              
      this.snackBar.open("Details displayed", "OK",
      {
      duration:4500,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
      })
      }
    )
  }

  update_status()
  {
    this.router.navigate(['/update-status']);
  }

  accept()
  {
    this.flaskapiservice.accept(this.user_id)
    .subscribe((response)=>{
      if(response == "status updated successfully")
        {
          this.snackBar.open("status updated successfully", "OK",
      {
      duration:4500,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
      })
        }
        else
        {
          this.snackBar.open("status updated successfully", "OK",
      {
      duration:4500,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
      })
        }
       
    },
    
    (error) => {                              
      this.snackBar.open("Details displayed", "OK",
      {
      duration:4500,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
      })
      }
    )

  }

  reject()
  {
    this.flaskapiservice.accept(this.user_id)
    .subscribe((response)=>{
      if(response == "status updated successfully")
        {
          this.snackBar.open("status updated successfully", "OK",
      {
      duration:4500,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
      })
        }
        else
        {
          this.snackBar.open("status updated successfully", "OK",
      {
      duration:4500,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
      })
        }
       
    },
    
    (error) => {                              
      this.snackBar.open("Details displayed", "OK",
      {
      duration:4500,
      verticalPosition: 'top',
      horizontalPosition: 'center', 
      })
      }
    )

  }

}


