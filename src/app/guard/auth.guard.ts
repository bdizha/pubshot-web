import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()

export class AuthGuard implements CanActivate {
    redirectUrl;

    constructor(private authService: AuthService,
                private router: Router) {

    }

    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot) {
        if (this.authService.isLogged()) {
            return true;
        } else {
            this.redirectUrl = state.url;
            this.router.navigate(['/login']);
            return false;
        }
    }
}
	
