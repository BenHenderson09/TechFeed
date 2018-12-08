import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { PostService } from '../services/post.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ResolverService implements Resolve<any> {
  posts:any;

  constructor(private postService: PostService, private http:Http) {}

  getPosts(): Observable<any> {
    let url =  environment.local ?  environment.localURL : environment.prodURL;
    let endpoint = url + "/api/posts/all";;
     
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