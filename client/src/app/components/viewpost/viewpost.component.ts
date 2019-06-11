import { Component, OnInit} from '@angular/core';
import { PostService } from '../../services/post.service';
import { AuthService } from '../../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { User } from '../models/User';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  CurrentUser: User = new User();
  authenticated: boolean;

  post:any;
  body: any;

  upvoted: boolean;
  downvoted: boolean;

  constructor(private postService: PostService, private authService: AuthService, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
    this.post = this.route.snapshot.data['post'];

    this.body = sanitizer.bypassSecurityTrustHtml(this.post.body);

    // Convert GMT time to dd-mm-yy
    let year = this.post.created.split("T")[0].split("-")[2];
    let month = this.post.created.split("T")[0].split("-")[1];
    let day = this.post.created.split("T")[0].split("-")[0];
    this.post.created = day + "-" + month + "-" + year; 

    authService.isAuthenticated().subscribe(
      data => {
        const userData = JSON.parse(JSON.stringify(data));

        if (userData.authenticated) {
          this.authenticated = true;
        }

        if (userData.username) {
          this.CurrentUser.username = userData.username;
        }
        this.setVote();
      },
      err => {
        console.log(err); throw err;
      }
    )
  }

  delete() {
    if (this.CurrentUser.username == this.post.author) {
      if (confirm("Are you sure you want to delete this post?")) {
        this.postService.deletePost(this.post._id).subscribe(
          data => {
            const response = JSON.parse(JSON.stringify(data));
            if (response.success) {
              alert("Post Deleted Successfully");
              window.location.href = "/";
            }
          }
        );
      }
    } else {
      alert("You do not own this post!");
    }
  }

  edit() {
    if (this.CurrentUser.username == this.post.author) {
      this.postService.editPost(this.post._id);
    } else {
      alert("You do not own this post!");
    }
  }

  formatVotes() {
    if (this.post.votes >= 1000 && this.post.votes <= 9999) {
      let thousandDisplayVote = (this.post.votes / 100).toString();
      let each = thousandDisplayVote.split(""); //Seperate the numbers into seperate characters
      thousandDisplayVote = each[0] + "." + each[1] + "k";
      return thousandDisplayVote;

    } else if (this.post.votes >= 10000 && this.post.votes <= 99999) {
      let thousandDisplayVote = (this.post.votes / 100).toString();
      let each = thousandDisplayVote.split(""); //Seperate the numbers into seperate characters
      thousandDisplayVote = each[0] + each[1] + "." + each[2] + "k";
      return thousandDisplayVote;

    } else if (this.post.votes >= 100000 && this.post.votes <= 999999) {
      let thousandDisplayVote = (this.post.votes / 100).toString();
      let each = thousandDisplayVote.split(""); //Seperate the numbers into seperate characters
      thousandDisplayVote = each[0] + each[1] + each[2] + "." + each[3] + "k";
      return thousandDisplayVote;

    } else if (this.post.votes >= 1000000 && this.post.votes <= 9999999) {
      let millionDisplayVote = (this.post.votes / 100000).toString();
      let each = millionDisplayVote.split(""); //Seperate the numbers into seperate characters
      millionDisplayVote = each[0] + "." + each[1] + "m";
      return millionDisplayVote;

    } else if (this.post.votes >= 10000000 && this.post.votes <= 99999999) {
      let millionDisplayVote = (this.post.votes / 100000).toString();
      let each = millionDisplayVote.split(""); //Seperate the numbers into seperate characters
      millionDisplayVote = each[0] + each[1] + "." + each[2] + "m";
      return millionDisplayVote;

    } else if (this.post.votes >= 100000000 && this.post.votes <= 999999999) {
      let millionDisplayVote = (this.post.votes / 100000).toString();
      let each = millionDisplayVote.split(""); //Seperate the numbers into seperate characters
      millionDisplayVote = each[0] + each[1] + each[2] + "." + each[3] + "m";
      return millionDisplayVote;
    }
    else if (this.post.votes > 999999999) {
      return "Limit exceeded";
    }
    else {
      return this.post.votes;
    }
    // Went completely insane yet?
  }

  upvote() {
    if (this.validated()) {
      if (!this.voted()) {
        this.post.voters.push({ user: this.CurrentUser.username, vote: "up" });
        this.postService.upvote(this.CurrentUser.username, this.post._id, 1).subscribe();
        this.post.votes++;
        this.setVote();
      }
      else {
        this.post.voters.forEach(voter => {
          if (voter.user == this.CurrentUser.username) {
            if (voter.vote == "down") {
              voter.vote = "up";
              this.postService.upvote(this.CurrentUser.username, this.post._id, 2).subscribe();
              this.post.votes += 2;
              this.setVote();

            }
            else if (voter.vote == "up") {
              voter.vote = "";
              this.postService.downvote(this.CurrentUser.username, this.post._id, 1).subscribe();
              this.post.votes--;
              this.setVote();

            } else {
              voter.vote = "up";
              this.postService.upvote(this.CurrentUser.username, this.post._id, 1).subscribe();
              this.post.votes++;
              this.setVote();

            }
          }
        });
      }
    }
  }


  downvote() {
    if (this.validated()) {
      if (!this.voted()) {
        this.post.voters.push({ user: this.CurrentUser.username, vote: "down" });
        this.postService.downvote(this.CurrentUser.username, this.post._id, 1);
        this.post.votes--;
        this.setVote();
      } else {
        this.post.voters.forEach(voter => {
          if (voter.user == this.CurrentUser.username) {
            if (voter.vote == "up") {
              voter.vote = "down";
              this.postService.downvote(this.CurrentUser.username, this.post._id, 2).subscribe();
              this.post.votes -= 2;
              this.setVote();

            } else if (voter.vote == "down") {
              voter.vote = "";
              this.postService.upvote(this.CurrentUser.username, this.post._id, 1).subscribe();
              this.post.votes++;
              this.setVote();
            } else {
              voter.vote = "down";
              this.postService.downvote(this.CurrentUser.username, this.post._id, 1).subscribe();
              this.post.votes--;
              this.setVote();
            }
          }
        });
      }
    }
  }

  validated() {
    if (!this.authenticated) {
      alert("You must be logged in to perform this action.");
      return false;
    }
    if (this.post.author == this.CurrentUser.username) {
      alert("You can't vote on your own post.");
      return false;
    }
    return true;
  }

  voted() {
    for (var i = 0; i < this.post.voters.length; i++) {
      if (this.post.voters[i].user == this.CurrentUser.username) {
        return true;
      }
    }
    return false;
  }

  setVote() {
    this.post.voters.forEach(voter => {
      if (voter.user == this.CurrentUser.username) {
        if (voter.vote == "up") {
          this.upvoted = true;
          this.downvoted = false;
        } else if (voter.vote == "down") {
          this.upvoted = false;
          this.downvoted = true;
        } else {
          this.upvoted = false;
          this.downvoted = false;
        }
      }
    });
  }

  ngOnInit() {
  }

}
