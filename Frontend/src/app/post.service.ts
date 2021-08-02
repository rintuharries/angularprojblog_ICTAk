import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  

constructor(private http:HttpClient) { }

  getPost(id:any){
    return this.http.get("http://localhost:3000/post/"+id);
  }
  getPosts(){
    return this.http.get("http://localhost:3000/posts");
  }
  approvePost(post:any){

    return this.http.get("http://localhost:3000/approvalstatus",post)
    .subscribe(data =>{console.log(data)})
  
  }
  rejectPost(id:any){

    return this.http.get("http://localhost:3000/rejectpost"+id);
   
  }

}


