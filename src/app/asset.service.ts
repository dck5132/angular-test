import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AssetService {

  constructor(
      private router: Router,
      private http: HttpClient
  ) { }
  
  getAssets(url: string) {
        return this.http.get(url)
        .map(
                (response: Response) => {
                    const data: any = response.json();
                    for ( const truck of data)
                    return data;
                }
            )
            .catch (
                (error: Response) => {
                    console.log(error);
                    return Observable.throw(error);
                }
            )
    }
    
}
