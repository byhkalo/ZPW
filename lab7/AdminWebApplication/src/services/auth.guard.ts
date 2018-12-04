import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'firebase/auth';
import { Observable, of } from 'rxjs';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {

    path: ActivatedRouteSnapshot[];
    readonly route: ActivatedRouteSnapshot;
    // constructor(path: ActivatedRouteSnapshot[])
    constructor(private router: Router) {
    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return of(true);
        // return this.authService.authState$.pipe(map(state => {
        //     if (state !== null) { return true; }
        //     this.router.navigate(['/login']);
        //     return false;
        // }));
    }
}