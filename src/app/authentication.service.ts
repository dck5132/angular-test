import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthenticationService {
  token: string = null;
  constructor (
      private http: HttpClient,
      private router: Router
      ) {}

    logCredentials(username: string, password: string, url: string) {
        console.log(username + " " + password + " " + url);
    }
    getToken(url: string) {
        return this.http.get(url)
        .map(
                (response: Response) => {
                    const data: any = response.json();
                    console.log(data.Token);
                    return data.Token;
                }
            )
            .catch (
                (error: Response) => {
                    console.log(error);
                    return Observable.throw(error);
                }
            )
    }
    
    isAuthenticated(token: string) {
        return token != null;
    }
    
    nowCheck (){
      return this.isAuthenticated(localStorage.getItem('tk'));
  }
  
    logout(){
        localStorage.removeItem('tk');
        this.router.navigate(['/']);
    }
}