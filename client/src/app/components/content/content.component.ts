import { Component, AfterViewInit, OnInit} from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';

/*
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="fluid"
     data-ad-layout-key="-7q+j-ex+6d+tl"
     data-ad-client="ca-pub-5657057422841152"
     data-ad-slot="6827494002"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
*/

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', '../global.css']
})

export class ContentComponent implements OnInit, AfterViewInit {
  searchText : String;
  categoryFilter: String = "All Categories";
  sortFilter: String = "Newest";
  posts: any;
  unfilteredPosts: any;
  loaded: boolean = false;

  constructor(private postService:PostService, private route:ActivatedRoute){}

  ngAfterViewInit(){
      try {
            let items = $('.adsbygoogle').length;
            for(let i = 0; i < items; i++){
              (window['adsbygoogle'] = window['adsbygoogle'] || []).push({});
            }
                
            } catch (e) {}
  }

  ngOnInit() {
    this.unfilteredPosts = this.route.snapshot.data['posts'];
    this.posts = this.unfilteredPosts;
  }

  checkKey(event){
    if (event.key == "Enter"){
      this.search();
    }
  }

  search(){
    let filtered = [];

    this.posts.forEach(post =>{
      if (post.title.toLowerCase().includes(this.searchText.toLowerCase())){
        filtered.push(post);
      }
    });
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
        this.posts = this.unfilteredPosts;
        this.setSortFilter(this.sortFilter);
    }
  }

  sortByCategory(category) {
    let filtered = [];
    
    this.posts = this.unfilteredPosts;

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
  }

  setSortFilter(filter) {
    this.sortFilter = filter;

    if (filter == "Newest") {
      this.posts = this.unfilteredPosts;
      this.setCategoryFilter(this.categoryFilter);
    }

    if (filter == "Most Votes") {
      (this.posts.sort((a, b) => parseFloat(a.votes) - parseFloat(b.votes))).reverse();
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
      return false;
    }
  }
}
