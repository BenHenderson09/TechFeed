import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ViewpostResolverService implements Resolve<any> {
  posts:any;

  constructor(private http:Http) {}

  getPost(post_id): Observable<any> {
    let url =  environment.local ?  environment.localURL : environment.prodURL;
    let endpoint = url + "/api/posts/id";

    return this.http.post(endpoint, { id:post_id
     })
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
    return this.getPost(route.paramMap.get('id'));
  }
}