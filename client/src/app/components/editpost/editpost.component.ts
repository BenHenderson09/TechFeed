import { Component, OnInit , Inject} from '@angular/core';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/User';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editpost',
  templateUrl: './editpost.component.html',
  styleUrls: ['./editpost.component.css']
})
export class EditpostComponent implements OnInit {
  CurrentUser: User = new User()
  id: string;

  postImage: any;
  titleContent: String;
  bodyContent: String;

  titleMsg: String;
  bodyMsg: String;

  cb_machinelearning: Boolean = false;
  cb_mobile: Boolean = false;
  cb_other: Boolean = false;
  cb_robotics: Boolean = false;
  cb_software: Boolean = false;
  cb_technews: Boolean = false;
  cb_web: Boolean = false;

  constructor(private postService: PostService, private authService: AuthService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
        this.id = params['id'];
      }
    );

    this.authService.isAuthenticated().subscribe(
      data => {
        const response = JSON.parse(JSON.stringify(data));
        if (response.authenticated == true) {
          this.CurrentUser.username = response.username;
          this.CurrentUser.email = response.email;
          this.CurrentUser.fullname = response.fullname;
          this.CurrentUser.created = response.created;
        } else {
          // window.location.replace("/auth/login");
        }
      },
      err => {
        console.log(err); throw err;
      }
    );

    this.postService.getPostById(this.id).subscribe(
      data => {
        const response = JSON.parse(JSON.stringify(data));

        if (response.title) {
          this.titleContent = response.title;
        }
        if (response.body) {
          this.bodyContent = response.body;
        }
        if (response.categories) {
          response.categories.forEach(category => {
            this.changeCheck(category);
          });
        }
      },
      err => {
        console.log(err); throw err;
      }
    );
  }

  updatePost(form: NgForm, event) {
    event.preventDefault();

    this.clearMessages();
    if (this.validateInput(form.value)) {
      if (confirm("Are you sure you want to edit this post?")) {
        let data = {
          id: this.id,
          title: form.value.title,
          body: form.value.body,
          cb_machinelearning: this.cb_machinelearning.toString(),
          cb_mobile: this.cb_mobile.toString(),
          cb_other: this.cb_other.toString(),
          cb_robotics: this.cb_robotics.toString(),
          cb_software: this.cb_software.toString(),
          cb_technews: this.cb_technews.toString(),
          cb_web: this.cb_web.toString(),
        }

        this.postService.updatePost(data).subscribe(
          data => {
            const response = JSON.parse(JSON.stringify(data));
            if (response.success) {
              alert("Post Updated Successfully");
              window.location.href = "/";
            }
          },
          err => {
            console.log(err); throw err;
          }
        );
      }
    }
  }

  validateInput(input) {
    if (input.title != undefined && input.title.length > 0) {
      if (input.title.length <= 5) {
        this.titleMsg = "Title must be longer than 5 characters";
      }
      if (input.title.length > 100) {
        this.titleMsg = "Titles must be under 100 characters.";
      }
    } else {
      this.titleMsg = "Please enter a title";
    }

    if (input.body != undefined && input.body.length > 0) {
      if (input.body.length > 90000) {
        this.bodyMsg = "Sorry! Body is too long. Please add a link for extended text.";
      }
    } else {
      this.bodyMsg = "Please enter a body";
    }

    if (this.bodyMsg == undefined && this.titleMsg == undefined) {
      return true;
    }

    return false;
  }

  clearMessages() {
    this.titleMsg = undefined;
    this.bodyMsg = undefined;
  }

  changeCheck(checkbox) {
    switch (checkbox) {
      case "cb_software":
        this.cb_software = !this.cb_software;
        break;
      case "cb_machinelearning":
        this.cb_machinelearning = !this.cb_machinelearning;
        break;
      case "cb_mobile":
        this.cb_mobile = !this.cb_mobile;
        break;
      case "cb_other":
        this.cb_other = !this.cb_other;
        break;
      case "cb_robotics":
        this.cb_robotics = !this.cb_robotics;
        break;
      case "cb_technews":
        this.cb_technews = !this.cb_technews;
        break;
      case "cb_web":
        this.cb_web = !this.cb_web;
        break;
    }
    return false; // Prevents form for automatically sending on button click
  }

  checkFileType(image: HTMLInputElement) {
    if (image && image.value) {
      let value = image.value.split(".")[1];

      if (value == "jpeg" || value == "jpg" || value == "png" || value == undefined) {
        return;
      } else {
        alert("This file type is not supported.");
        image.value = "";
      }
    }
  }

  setFile(event) {
    this.postImage = event.target.files[0];
  }

  ngOnInit() {
  }
}
