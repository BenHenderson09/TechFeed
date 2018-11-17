import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  isUnique(user){
    return this.http.post("/api/auth/unique", user);
  }

  register(user){
    return this.http.post("/api/auth/register", user);
  }

  login(user){
    return this.http.post("/api/auth/login", user);
  }

  isAuthenticated(){
    return this.http.get("/api/auth/authenticated");
  }

  getByUsername(username){
    return this.http.post("/api/auth/username", {username:username});
  }

  delete(user){
    return this.http.request("delete","/api/auth/delete", {body:user});
  }

  update(user){
    return this.http.post("/api/auth/update", user);
  }

  setPostCount(user){
    return this.http.post("/api/auth/postcount", user);
  }

  setVoteCount(user){
    return this.http.post("/api/auth/votecount", user);
  }
}
