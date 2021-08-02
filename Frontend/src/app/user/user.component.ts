import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { userserviceService } from '../userservice.service';
import {  ActivatedRoute,Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
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

  users=[{
    firstname:'',
    lastname:'',
    email:'',
    password:'',
    phone:'',
    usertype:''
  }];

  constructor(private router:Router,private postservice:PostService,private userservice:userserviceService) { }

  ngOnInit(): void {
    this.postservice.getPosts().subscribe((data)=>{
      this.posts=JSON.parse(JSON.stringify(data));
    });
    this.userservice.getusers().subscribe((data)=>{
      this.users=JSON.parse(JSON.stringify(data));  
    });
  }
   
}
