
import { Injectable } from '@angular/core';
import {HttpClient,HttpResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class userserviceService {

  constructor(private http:HttpClient) { }

  server_address:string='/api'

  getuser(id:any){
    return this.http.get("http://localhost:3000/user/"+id);
  }
  getusers(){
    return this.http.get("http://localhost:3000/users");
  }
}