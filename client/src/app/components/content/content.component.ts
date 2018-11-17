import { Component, OnInit , Inject} from '@angular/core';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', '../global.css']
})
export class ContentComponent implements OnInit {
  searchText : String;
  categoryFilter: String = "All Categories";
  sortFilter: String = "Most Votes";
  posts: any = {};


  constructor(private postService: PostService) {
    this.postService.getPosts().subscribe(
      data => {
        const response = JSON.parse(JSON.stringify(data));
        this.posts = response;

        this.setSortFilter(this.sortFilter);
      },
      err => {
        console.log(err); throw err;
      }
    );
  }

  checkKey(event){
    if (event.key == "Enter"){
      this.search();
    }
  }

  search(){
    let filtered = [];

    this.postService.getPosts().subscribe(
      data => {
        const response = JSON.parse(JSON.stringify(data));
        this.posts = response;

        this.posts.forEach(post =>{
          if (post.title.includes(this.searchText)){
            filtered.push(post);
          }
        });
        this.posts = filtered;
        this.setSortFilter(this.sortFilter);
      },
      err => {
        console.log(err); throw err;
      }
    );
  }

  setCategoryFilter(filter) {
    this.categoryFilter = filter;

    switch (filter) {
      case "Software":
        this.sortByCategory("software");
        break;
      case "Web":
        this.sortByCategory("web");
        break;
      case "Machine Learning":
        this.sortByCategory("machinelearning");
        break;
      case "Robotics":
        this.sortByCategory("robotics");
        break;
      case "Mobile":
        this.sortByCategory("mobile");
        break;
      case "Tech News":
        this.sortByCategory("technews");
        break;
      case "Other":
        this.sortByCategory("other");
        break;
      case "All Categories":
      this.postService.getPosts().subscribe(
        data => {
          const response = JSON.parse(JSON.stringify(data));
          this.posts = response;
  
          this.setSortFilter(this.sortFilter);
        },
        err => {
          console.log(err); throw err;
        }
      );
    }
  }

  sortByCategory(category) {
    let filtered = [];
    this.postService.getPosts().subscribe(
      data => {
        const response = JSON.parse(JSON.stringify(data));
        this.posts = JSON.parse(JSON.stringify(response));

        this.posts.forEach((post, index) => {
          let containsFilter = false;
          post.categories.forEach(cat => {
            if (cat.includes(category)) {
              containsFilter = true;
            }
          });

          if (containsFilter){
            filtered.push(this.posts[index]);
          }
        }); 

        this.posts = filtered;
    
        if (this.sortFilter != "Newest") {
          this.setSortFilter(this.sortFilter);
        }

      },
      err => {
        console.log(err); throw err;
      }
    );
  }

  setSortFilter(filter) {
    this.sortFilter = filter;

    if (filter == "Newest") {
      this.postService.getPosts().subscribe(
        data => {
          const response = JSON.parse(JSON.stringify(data));
          this.posts = response;
        },
        err => {
          console.log(err); throw err;
        }
      );
    }

    if (filter == "Most Votes") {
      (this.posts.sort((a, b) => parseFloat(a.votes) - parseFloat(b.votes))).reverse();
    }

    if (filter == "Least Votes") {
      this.posts.sort((a, b) => parseFloat(a.votes) - parseFloat(b.votes));
    }
  }

  mobile() {
    if (window.innerWidth <= 992) {
      return true;
    }
    return false;
  }

  ngOnInit() {
  }

}
