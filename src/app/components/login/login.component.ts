import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthGuard} from "../../guard/auth.guard";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    previousUrl: String = "";
    user = {
        email: "",
        password: ""
    };

    loginForm: FormGroup;

    constructor(private authService: AuthService,
                private userService: UserService,
                private router: Router,
                private authGuard: AuthGuard,) {
    }

    ngOnInit() {
        this.loginForm = new FormGroup({
            'email': new FormControl(this.user.email,
                [
                    Validators.required,
                    Validators.email
                ]),
            'password': new FormControl(this.user.password, Validators.required)
        });

        if (this.authGuard.redirectUrl) {
            this.previousUrl = this.authGuard.redirectUrl;
            this.authGuard.redirectUrl = undefined;
        }
    }

    onLoginSubmit() {
        let user = {
            email: this.loginForm.value.email,
            password: this.loginForm.value.password
        };

        this.userService.login(user).subscribe(data => {
            if (data.success) {
                console.log('You are successfully logged in');

                console.log(data.user, "data.user");
                console.log(data.token, "data.token");

                this.authService.storeUser(data.token, data.user);
                if (this.previousUrl) {
                    this.router.navigate([this.previousUrl]);
                    console.log(this.previousUrl);
                    this.previousUrl = undefined;
                } else {
                    console.log(this.previousUrl);
                    this.router.navigate(['/profile']);
                    console.log("hello")
                }

            } else {
                console.log('You are not logged in');

            }
        });
    }

    get email() {
        return this.loginForm.get('email');
    }

    get password() {
        return this.loginForm.get('password');
    }

}
