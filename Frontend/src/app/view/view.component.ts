import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute,Router} from "@angular/router";
import { PostService } from '../post.service';
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  posts!: [
    {
      title: '';
      description: '';
      category: '';
      image: '';
      published: '';

    }
  ];

  constructor(private router:Router,private postService:PostService) { }

  ngOnInit(): void {

    
  }
 
 


}
 

