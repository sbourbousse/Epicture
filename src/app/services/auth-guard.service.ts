import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }

  canActivate(route: ActivatedRouteSnapshot): Promise<boolean>|boolean {
    
    return this.authService.getObject("user").then(val => {
      if (val) {
        return true;
      } else {
        //Si on est redirigé par le service oAuth sur account
        const accessToken = this.getAccessTokenFromCallbackUrl(route);
        if (route.routeConfig.path == 'account' && accessToken) {
          this.authService.setObject("user", {token: accessToken})
          return true;
        } else {
          this.authService.redirectToAuthentification();
          return false;
        }
      }
    })
  }

  getAccessTokenFromCallbackUrl(route: ActivatedRouteSnapshot) {
    var accesToken
    if (route.fragment) {
      accesToken = route.fragment
      .split("&")[0]
      .replace("/", "")
      .split("=")[1];
    } else {
      accesToken = null;
    }
    return accesToken;
  }

  
  getUserObjectFromLocalstorage() {
    var user;
    this.authService.getObject("user").then((val) => {
      if(val)
        user = val
      else 
        user = null
    })
    return user;
  }
}
