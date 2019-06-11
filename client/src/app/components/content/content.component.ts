import { Component, AfterViewInit, OnInit, ɵConsole} from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', '../global.css']
})

export class ContentComponent{
  searchText : String;
  categoryFilter: String = "All Categories";
  sortFilter: String = "Newest";
  posts: any;
  unfilteredPosts: any;
  loaded: boolean = false;

  constructor(private postService:PostService, private route:ActivatedRoute){}

  ngOnInit() {
    this.unfilteredPosts = this.route.snapshot.data['posts'];
    this.posts = this.route.snapshot.data['posts'].slice(0); // slice clones array object
  }

  checkKey(event){
    if (event.key == "Enter"){
      this.search();
    }
  }

  search(){
    let filtered = [];
    
    if (this.categoryFilter == "All Categories"){
      this.unfilteredPosts.forEach(post =>{
        if (post.title.toLowerCase().includes(this.searchText.toLowerCase())){
         filtered.push(post);
        }
      });
    }
    else {

      this.unfilteredPosts.forEach((post) => {
        if (post.title.toLowerCase().includes(this.searchText.toLowerCase())){
              let containsFilter = false;
              post.categories.forEach(cat => {
                switch (this.categoryFilter) {
                  case "Software":
                    if (cat.includes("software")) {
                      containsFilter = true;
                    }
                    break;
                  case "Web":
                    if (cat.includes("web")) {
                      containsFilter = true;
                    }
                    break;
                  case "Machine Learning":
                    if (cat.includes("machinelearning")) {
                      containsFilter = true;
                    }
                    break;
                  case "Robotics":
                    if (cat.includes("robotics")) {
                      containsFilter = true;
                    }
                    break;
                  case "Mobile":
                    if (cat.includes("mobile")) {
                      containsFilter = true;
                    }
                    break;
                  case "Tech News":
                    if (cat.includes("technews")) {
                      containsFilter = true;
                    }
                    break;
                  case "Other":
                    if (cat.includes("other")) {
                      containsFilter = true;
                    }
                    break;
                }
              });
        
              if (containsFilter){
                filtered.push(post);
              }
            }
    
      });
    }
    
    
    this.posts = filtered;
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
        this.posts = this.unfilteredPosts.slice(0);
        if (this.sortFilter != "Newest"){
          this.setSortFilter(this.sortFilter);
        }    
      }
  }

  sortByCategory(category) {
    let filtered = [];
    
    this.posts = this.unfilteredPosts.slice(0);

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

    console.log(this.posts);
    if (this.sortFilter != "Newest") {
      this.setSortFilter(this.sortFilter);
    }
  }

  setSortFilter(filter) {
    this.sortFilter = filter;

    if (filter == "Newest") {
    console.log(this.posts);

      this.posts.sort((a, b) => {
          let aCreated = a.created.split('-').reverse().join();
          let bCreated = b.created.split('-').reverse().join();
          return aCreated > bCreated ? -1 : (aCreated < bCreated ? 1 : 0);
      });
    }

    if (filter == "Most Votes") {
      this.posts.sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes));
    }

    if (filter == "Least Votes") {
      this.posts.sort((a, b) => parseFloat(a.votes) - parseFloat(b.votes));
    }
  }

  mobile() {
    try{
      if (window.innerWidth <= 992) {
        return true;
      }
      return false;
    } catch(e){
    }
  }
}
