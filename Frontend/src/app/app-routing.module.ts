import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [

  { path: 'view', component: ViewComponent },
  { path: 'users', component: UsersComponent },
  { path: 'posts', component: PostsComponent },



 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
