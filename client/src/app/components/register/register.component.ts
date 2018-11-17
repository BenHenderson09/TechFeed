import { Component, OnInit , Inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../models/User';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser : User = new User()
  usernameMsg : String
  fullnameMsg : String
  emailMsg    : String
  passwordMsg : String
  passwordResubmitMsg: String

  constructor(private authService: AuthService) { }

  register(event){
    event.preventDefault();
    this.clearMessages();
    
    if (this.validateInputs()){
      this.authService.isUnique(this.newUser).subscribe(
        data=>{
          const message = JSON.parse(JSON.stringify(data)); // Easy way to convert to JSON
          
          if (message.success){
            this.authService.register(this.newUser).subscribe(
              data =>{
                window.location.replace("/auth/login");
              },
              err =>{
                console.log(err); throw err;
              }
            )
          }
          else{
            if (message.matches == "username"){
              this.usernameMsg = "This username is already in use";
            }
            if (message.matches == "email"){
              this.emailMsg = "This email is already in use";
            }
          }
        },
        err=>{
          console.log(err); throw err;
        }
      );
    }
  }

  clearMessages(){
    this.usernameMsg         = undefined;
    this.fullnameMsg         = undefined;
    this.emailMsg            = undefined;
    this.passwordMsg         = undefined;
    this.passwordResubmitMsg = undefined;
  }

  validateInputs(){
    // --- Username ---
    if (this.newUser.username != undefined){
      if (this.newUser.username.length <= 5){
        this.usernameMsg = "Usernames must be longer than 5 characters";
      }
      if (this.newUser.username.length >= 30){
        this.usernameMsg = "Usernames must be less than 30 characters"
      }
    }else{
      this.usernameMsg = "Please enter a username";
    }

    // --- Fullname ---
    if (this.newUser.fullname != undefined){
      if (this.newUser.fullname.length < 2){
        this.fullnameMsg = "Fullnames must be longer than 1 character";
      }
      if (this.newUser.fullname.length >= 50){
        this.fullnameMsg = "Fullnames must be less than 50 characters";
      }
      if (this.newUser.fullname.match(/\d+/g) != null){
        this.fullnameMsg = "Fullnames can't contain numbers.";
      }
   }else{
    this.fullnameMsg = "Please enter a name";
  }

    // --- Email ---
    if (this.newUser.email != undefined){
      if (this.newUser.email.length <= 5){
        this.emailMsg = "Emails must be longer than 5 characters";
      }
      if (this.newUser.email.length >= 50){
        this.emailMsg = "Emails must be less than 50 characters";
      }
      if (!this.newUser.email.includes("@")){
        this.emailMsg = "Please enter a valid email address.";
      }
   }else{
    this.emailMsg = "Please enter an email";
  }

    // --- Password ---
    if (this.newUser.password != undefined){
      if (this.newUser.password.length <= 5){
        this.passwordMsg = "Password must be longer than 5 characters";
      }
      if (this.newUser.password.length >= 50){
        this.passwordMsg = "Password must be less than 50 characters";
      }
      if (this.newUser.password.match(/\d+/g) == null){
        this.passwordMsg = "Password must contain at least one number.";
      }
      if (this.newUser.password.match(/[a-z]/i) == null){
        this.passwordMsg = "Password must contain at least one alphabetical letter.";
      }
    }else{
      this.passwordMsg = "Please enter a password";
    }

    // --- Password Resubmit ---
    if (this.newUser.passwordResubmit != undefined){
      if (this.newUser.passwordResubmit != this.newUser.password){
        this.passwordResubmitMsg = "Passwords do not match";
      }
    }else{
      this.passwordResubmitMsg = "Please resubmit the password";
    }

    if (this.usernameMsg == undefined && this.fullnameMsg == undefined && this.emailMsg == undefined && this.passwordMsg == undefined && this.passwordResubmitMsg == undefined){
      return true;
    }else{
      return false;
    }
  }

  ngOnInit() {
  }

}
