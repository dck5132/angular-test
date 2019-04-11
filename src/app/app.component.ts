import { Component, OnInit, OnDestroy } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';
import { Router, NavigationEnd} from '@angular/router';

import { AuthguardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';

import { Subscription } from 'rxjs';

declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {

  routeSubscription: Subscription;

  constructor(
    public router: Router,
    private authentication: AuthenticationService,
    private authguard: AuthguardService
    ) {
      this.unsubscribe(this.routeSubscription);
      this.routeSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        (<any>window).ga('set', 'page', event.urlAfterRedirects);
        (<any>window).ga('send', 'pageview');
      }
    });
    }

    ngOnInit() {
      console.log('init');
    }
    
    unsubscribe(subscription: Subscription) {
      if (subscription) {
        subscription.unsubscribe();
      }
    }
    
    ngOnDestroy() {
      this.unsubscribe(this.routeSubscription);
    }

  
  title = `IONX`;
}
