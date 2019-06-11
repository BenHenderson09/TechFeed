import { Component, OnInit} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';
import { User } from '../models/User';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  CurrentUser : User = new User();
  posts : any = {};

  constructor(private authService : AuthService, private postService : PostService) { 
    
    authService.isAuthenticated().subscribe(
      data =>{
        const response = JSON.parse(JSON.stringify(data));

        if (response.authenticated){

          this.CurrentUser.username = response.username;
          this.CurrentUser.email = response.email;
          this.CurrentUser.fullname = response.fullname;
          this.CurrentUser.posts = response.posts;
          this.CurrentUser.votes = response.votes;
          this.CurrentUser.created = response.created;
          this.CurrentUser.id = response.id;
        }else{
          window.location.href = "/auth/login";
        }

        authService.setPostCount(this.CurrentUser).subscribe(
          data =>{
            const response = JSON.parse(JSON.stringify(data));
            if (response.success){
              this.CurrentUser.posts = response.postcount;
            }
          }
        );

        authService.setVoteCount(this.CurrentUser).subscribe(
          data =>{
            const response = JSON.parse(JSON.stringify(data));
            if (response.success){
              this.CurrentUser.votes = response.votecount;
            }
          }
        );
        
        postService.getPostsByUser(this.CurrentUser.username.toString()).subscribe(
          data =>{
            const response = JSON.parse(JSON.stringify(data));
         
            this.posts = response;
          },
          err =>{
            console.log(err); throw err;
          }
        );

      },
      err =>{
        console.log(err); throw err;
      }
    );
  }

  delete(){
    if(confirm("Are you sure to delete your account?")) {
      this.authService.delete(this.CurrentUser).subscribe(
        data =>{
          const response = JSON.parse(JSON.stringify(data));
          if (response.success){
            alert(response.message);
            window.location.href = "/";
          }
        },
        err =>{
          console.log(err); throw err;
        }
      );
    }
  }

  edit(){
    window.location.href = "/account/edit";
  }

  mobile(){
    if (window.innerWidth <= 992) {
      return true;
    }
      return false;
  }

  ngOnInit() {
  }

}
