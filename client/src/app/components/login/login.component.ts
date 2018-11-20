import { Component, OnInit , Inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUser : User = new User()
  emailMsg : String
  passwordMsg : String

  constructor(private authService : AuthService) { }

  login(event){
    event.preventDefault();
    this.clearMessages();
    
    if (this.checkInput()){
      this.authService.login(this.loginUser).subscribe(
        data =>{
          const response = JSON.parse(JSON.stringify(data));

          if (response.success == true){
            window.location.replace("/");
          }
          else{
            this.passwordMsg = response.message;
          }
        },
        err =>{
          console.log(err); throw err;
        }
      )
    }
  }

  clearMessages(){
    this.emailMsg = undefined;
    this.passwordMsg = undefined;
  }

  checkInput(){
    
    // Email
    if (this.loginUser.email == undefined || this.loginUser.email.length == 0){
      this.emailMsg = "An email address is required";
    }

    // Password
    if (this.loginUser.password == undefined || this.loginUser.password.length == 0){
       this.passwordMsg = "A password is required";
    }

    if (this.emailMsg == undefined && this.passwordMsg == undefined){
      return true;
    } 
    else{
      return false;
    }
  }

  ngOnInit() {
  }

}
