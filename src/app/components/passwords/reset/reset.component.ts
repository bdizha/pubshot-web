import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {AuthGuard} from "../../../guard/auth.guard";

@Component({
    selector: 'app-auth',
    templateUrl: './reset.component.html',
    styleUrls: ['./reset.component.css']
})

export class PasswordResetComponent implements OnInit {
    email: String;
    password: String;
    previousUrl;

    constructor(private authService: AuthService,
                private router: Router,
                private authGuard: AuthGuard,) {
    }

    ngOnInit() {
        if (this.authGuard.redirectUrl) {
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
        }
    }

    onResetPasswordSubmit() {
        const user = {
            email: this.email,
            password: this.password
        };

        this.authService.resetPassword(user).subscribe(data => {
            if (data.success) {
                console.log('You are successfully logged in');

                console.log(data.user, "data.user");

                this.authService.storeUser(data.token, data.user);
                if (this.previousUrl) {
                    this.router.navigate([this.previousUrl]);
                    console.log(this.previousUrl);
                    this.previousUrl = undefined;
                } else {
                    console.log(this.previousUrl);
                    this.router.navigate(['/']);
                    console.log("hello")
                }

            } else {
                console.log('You are not logged in');
            }
        });
    }

}
