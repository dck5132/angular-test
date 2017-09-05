import { Component } from '@angular/core';
import { WelcomeComponent } from './welcome/welcome.component';

import { AuthguardService } from './auth-guard.service';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor( 
    private authentication: AuthenticationService,
    private authguard: AuthguardService
    ) {}
  
  title = `IONX`;
}
