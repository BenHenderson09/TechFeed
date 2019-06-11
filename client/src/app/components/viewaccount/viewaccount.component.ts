import { Component, OnInit , Inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';

@Component({
  selector: 'app-viewaccount',
  templateUrl: './viewaccount.component.html',
  styleUrls: ['./viewaccount.component.css']
})
export class ViewaccountComponent implements OnInit {
  username : string;
  User : User = new User();
  posts : any = {};

  constructor(private postService: PostService, private authService: AuthService, private route: ActivatedRoute) { 
    this.route.params.subscribe(
      params => {
        this.username = params['username'];
      }
    );

    this.authService.getByUsername(this.username).subscribe(
      data =>{
        const response = JSON.parse(JSON.stringify(data));
        
        if (response){
          this.User.username = response.username;
          this.User.email = response.email;
          this.User.fullname = response.fullname;
          this.User.posts = response.posts;
          this.User.votes = response.votes;
          this.User.created = response.created;
          this.User.id = response._id;

          postService.getPostsByUser(this.User.username.toString()).subscribe(
            data =>{
              const response = JSON.parse(JSON.stringify(data));
           
              this.posts = response;
            },
            err =>{
              console.log(err); throw err;
            }
          );
        }else{
          window.location.href = "/";
        }
      },
      err =>{
        console.log(err); throw err;
      }
    );
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
