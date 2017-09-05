import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { AssetsComponent } from './assets/assets.component';

import { AuthenticationService } from './authentication.service';
import { AuthguardService } from './auth-guard.service';
import { AssetService } from './asset.service';
import { AssetComponent } from './asset/asset.component';

const appRoutes: Routes = [
   { path: '', component: WelcomeComponent},
   { path: 'login', component: LoginComponent},
   { path: 'assets', component: AssetsComponent, canActivate: [AuthguardService] },
   { path: 'assets/:name', component: AssetComponent, canActivate: [AuthguardService] }
 ];


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    AssetsComponent,
    AssetComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true })
  ],
  providers: [AuthenticationService, AuthguardService, AssetService],
  bootstrap: [AppComponent]
})
export class AppModule { }

