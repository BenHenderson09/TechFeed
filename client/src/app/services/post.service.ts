import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService{
  constructor(private http:HttpClient) { }

  posts:any;

  getPosts(){
    return this.http.get("/api/posts/all");
  }

  getPostById(id){
    return this.http.post("/api/posts/id", {id:id});
  }

  getPostsByUser(username){
    return this.http.post("/api/posts/username", {username:username});
  }

  addPost(post){
    var xhr = new XMLHttpRequest;
    xhr.open('POST', '/api/posts/add', true);
    xhr.send(post);
    xhr.onreadystatechange = ()=>{
      if (xhr.readyState == 4 && xhr.status == 200) {
        window.location.href = "/";
      }
    }
  }

  updatePost(post){
    var xhr = new XMLHttpRequest;
    xhr.open('POST', '/api/posts/update', true);
    xhr.send(post);
    xhr.onreadystatechange = ()=>{
      if (xhr.readyState == 4 && xhr.status == 200) {
        alert("Post Updated Successfully")
        window.location.href = "/";
      }
    }
  }

  deletePost(id){
    return this.http.request("delete","/api/posts/delete", {body:{id:id}});
  }

  editPost(id){
    window.location.href = "/posts/edit/"+id;
  }

  upvote(voter, postId, num){
    return this.http.post("/api/posts/upvote", {voter:voter, id:postId, num:num});
  }

  downvote(voter, postId, num){
    return this.http.post("/api/posts/downvote", {voter:voter, id:postId, num:num});
  }
}