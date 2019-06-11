import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  Authenticated : Boolean = false
  CurrentUser : User = new User()

  constructor(private authService : AuthService) {
    this.authService.isAuthenticated().subscribe(
      data =>{
        const response = JSON.parse(JSON.stringify(data));
        if (response.authenticated == true){
          this.Authenticated = true;
          this.CurrentUser.username  = response.username;
          this.CurrentUser.email     = response.email;
          this.CurrentUser.fullname  = response.fullname;
          this.CurrentUser.created   = response.created;
        }
      },
      err =>{
        console.log(err); throw err;
      }
    )
  }

  ngOnInit() {
  }

}
