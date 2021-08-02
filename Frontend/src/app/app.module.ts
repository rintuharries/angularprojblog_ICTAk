import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewComponent } from './view/view.component';
import { UsersComponent } from './users/users.component';
import { userserviceService } from './userservice.service';
import{PostService}  from './post.service';
import { PostsComponent } from './posts/posts.component';
import { UserComponent } from './user/user.component';
import { ApprovepostComponent } from './approvepost/approvepost.component'



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewComponent,
    UsersComponent,
    PostsComponent,
    UserComponent,
    ApprovepostComponent
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [userserviceService,PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
