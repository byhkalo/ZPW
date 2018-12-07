import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

    path: ActivatedRouteSnapshot[];
    readonly route: ActivatedRouteSnapshot;
    // constructor(path: ActivatedRouteSnapshot[])
    constructor(private authService: AuthService, private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        console.log('ROUTER GUARD + ' + next);
        if (this.authService.isLoggedInApplication()) {
            console.log('User Logged');
            return true;
        } else {
            console.log('Please Log In');
            this.router.navigate(['/login']);
            return false;
        }
    }
}