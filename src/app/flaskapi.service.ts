import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlaskapiService {

  
  constructor(private httpClient: HttpClient) {}


  public signin_user(email:any,password:any)
  {
    const formdata:FormData = new FormData();
    formdata.append('email',email);
    formdata.append('password',password);

    return this.httpClient.post('http://127.0.0.1:5000/signin_user',formdata);
  }

  public signin_admin(email:any,password:any)
  {
    const formdata:FormData = new FormData();
    formdata.append('email',email);
    formdata.append('password',password);

    return this.httpClient.post('http://127.0.0.1:5000/signin_admin',formdata);
  }

  public insert_user_data(user_id:any,email_value:any,title:any,priority:any,category:any,description:any,status:any)
  {
    const formdata:FormData = new FormData();
    formdata.append('user_id',user_id);
    formdata.append('email_value',email_value);
    formdata.append('title',title);
    formdata.append('priority',priority);
    formdata.append('category',category);
    formdata.append('description',description);
    formdata.append('status',status);
    
    

    return this.httpClient.post('http://127.0.0.1:5000/user_data',formdata);
  }

  public admin_data()
  {
    return this.httpClient.get('http://127.0.0.1:5000/admin_data')
  }

  public accept(user_id:any)
  {
    const formdata:FormData = new FormData();
    formdata.append('user_id',user_id);
    return this.httpClient.post('http://127.0.0.1:5000/accept',formdata)
  }

  public reject(user_id:any)
  {
    const formdata:FormData = new FormData();
    formdata.append('user_id',user_id);
    return this.httpClient.post('http://127.0.0.1:5000/reject',formdata)
  }

  public check(user_id:any)
  {
    const formdata:FormData = new FormData();
    formdata.append('user_id',user_id);
    return this.httpClient.post('http://127.0.0.1:5000/check',formdata)
  }

  public admin_signup(user_id:any,password:any)
  {
    const formdata:FormData = new FormData();
    formdata.append('user_id',user_id);
    formdata.append('password',password)
    return this.httpClient.post('http://127.0.0.1:5000/admin_signup',formdata)
  }




}
