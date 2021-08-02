import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Router} from "@angular/router";
import { PostService } from '../post.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts= [{
    PostTitle: '',
    CreatedTime: '',
    Description: '',
    Tag: '',
    Status: '',
    Image: '',
    Author: '',
    AuthorID: '',
  }];
  constructor(private router:Router,private postservice:PostService) { }

  ngOnInit(): void {
    this.postservice.getPosts().subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data));
    })
  }

  approvePost(post:any)
  {
    localStorage.setItem("postId", post._id.toString());
    this.router.navigate(['/']);

  }
  rejectPost(post:any)
  {
    this.postservice.rejectPost(post._id)
      .subscribe((data) => {
        this.posts = this.posts.filter(p => p !== post);
      })
  }
}
