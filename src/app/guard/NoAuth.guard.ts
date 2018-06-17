import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Injectable()

export class NoAuthGuard implements CanActivate {

    constructor(private authService: AuthService,
                private router: Router,) {

    }

    canActivate() {
        if (!this.authService.isLogged()) {
            return true;
        } else {
            this.router.navigate(['/profile']);
            return false;
        }
    }
}
