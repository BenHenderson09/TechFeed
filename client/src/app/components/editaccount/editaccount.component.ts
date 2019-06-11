import { Component, OnInit , Inject} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { User } from '../models/User';

@Component({
  selector: 'app-editaccount',
  templateUrl: './editaccount.component.html',
  styleUrls: ['./editaccount.component.css']
})
export class EditaccountComponent implements OnInit {
  CurrentUser: User = new User();

  usernameMsg: String;
  fullnameMsg: String;
  emailMsg: String;

  constructor(private authService: AuthService) {
    authService.isAuthenticated().subscribe(
      data => {
        const response = JSON.parse(JSON.stringify(data));

        if (response.authenticated) {
          this.CurrentUser.username = response.username;
          this.CurrentUser.email = response.email;
          this.CurrentUser.fullname = response.fullname;
          this.CurrentUser.posts = response.posts;
          this.CurrentUser.votes = response.votes;
          this.CurrentUser.created = response.created;
          this.CurrentUser.id = response.id;
        } else {
          window.location.href = "/auth/login";
        }
      },
      err => {
        console.log(err); throw err;
      }
    );
  }

  validate(inputs) {
    // --- Username ---
    if (inputs.username != undefined) {
      if (inputs.username.length <= 5) {
        this.usernameMsg = "Usernames must be longer than 5 characters";
      }
      if (inputs.username.length >= 30) {
        this.usernameMsg = "Usernames must be less than 30 characters"
      }
    } else {
      this.usernameMsg = "Please enter a username";
    }

    // --- Fullname ---
    if (inputs.fullname != undefined) {
      if (inputs.fullname.length < 2) {
        this.fullnameMsg = "Fullnames must be longer than 1 character";
      }
      if (inputs.fullname.length >= 50) {
        this.fullnameMsg = "Fullnames must be less than 50 characters";
      }
      if (inputs.fullname.match(/\d+/g) != null) {
        this.fullnameMsg = "Fullnames can't contain numbers.";
      }
    } else {
      this.fullnameMsg = "Please enter a name";
    }

    // --- Email ---
    if (inputs.email != undefined) {
      if (inputs.email.length <= 5) {
        this.emailMsg = "Emails must be longer than 5 characters";
      }
      if (inputs.email.length >= 50) {
        this.emailMsg = "Emails must be less than 50 characters";
      }
      if (!inputs.email.includes("@")) {
        this.emailMsg = "Please enter a valid email address.";
      }
    } else {
      this.emailMsg = "Please enter an email";
    }

    if (this.usernameMsg != undefined || this.emailMsg != undefined || this.fullnameMsg != undefined) {
      return false;
    } else {
      return true;
    }
  }

  clearMessages() {
    this.usernameMsg = undefined;
    this.emailMsg = undefined;
    this.fullnameMsg = undefined;
  }

  edit() {
    this.clearMessages();
    if (confirm("Are you sure you want to update your account?")) {
      if (this.validate(this.CurrentUser)) {
        this.authService.update(this.CurrentUser).subscribe(
          data => {
            const response = JSON.parse(JSON.stringify(data));

            if (response.success) {
              alert("Account updated successfully");
              window.location.href = "/";
            }
          },
          err => {
            console.log(err); throw err;
          }
        )
      }
    }
  }

  ngOnInit() {
  }

}
