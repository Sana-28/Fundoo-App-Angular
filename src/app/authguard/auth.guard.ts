import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../service/user.service';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private router: Router) {
     }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('Authorization')) {
       
            return true;
        }
      
        this.router.navigate(['/login']);
        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('Authorization')) {
       
            return true;
        }
      
        this.router.navigate(['/login']);
        return false;
    }

};

@Injectable()
export class LoginAuthGuard implements CanActivate {
 
    constructor(private router: Router) { }
     /**Parent routing */
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!localStorage.getItem('Authorization')) {
       
            return true;
        }
      
        this.router.navigate(['/home/createnotes']);
        return false;
    }
};

/*@Injectable()
class OnlyLoggedInUsersGuard implements CanActivate { 
  constructor(private userService: UserService) {}; 

  canActivate() {
    console.log("OnlyLoggedInUsers");
    if (this.userService.isLoggedIn()) { 
      return true;
    } else {
      window.alert("You don't have permission to view this page"); 
      return false;
    }
  }
}*/
   
   
