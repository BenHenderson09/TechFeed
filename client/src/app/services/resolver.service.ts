import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PostService } from '../services/post.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ResolverService implements Resolve<any> {
  posts:any;

  constructor(private postService: PostService, private http:Http) {}

  getPosts(): Observable<any> {
    let endpoint = "http://localhost:3000/api/posts/all";
     
    return this.http.get(endpoint, { })
    .pipe( map(
        res => {
          return res.json();
        },
        err => {
          return err;
        }
      )
    );
  }

  resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    return this.getPosts();
  }
}