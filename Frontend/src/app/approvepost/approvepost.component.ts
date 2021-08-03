import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-approvepost',
  templateUrl: './approvepost.component.html',
  styleUrls: ['./approvepost.component.css']
})
export class ApprovepostComponent implements OnInit {
  postdetail=
    {
      PostTitle: '',
      CreatedTime: '',
      Description: '',
      Tag: '',
      Status: '',
      Image: '',
      Author: '',
      AuthorID: '',
    }
  
  constructor(private router:Router,private postservice:PostService) { }

  ngOnInit(): void {

    let postid = localStorage.getItem("postId");
    this.postservice.getPost(postid).subscribe((data: any)=>{
      this.postdetail=JSON.parse(JSON.stringify(data));
    })
    }

  approvePost()
  {    
    this.postservice.approvePost(this.postdetail);   
    alert("Approved Successfully");
    this.router.navigate(['']);
  }
}
