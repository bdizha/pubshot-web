import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {AuthGuard} from "../../../guard/auth.guard";

@Component({
    selector: 'app-auth',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class PasswordEmailComponent implements OnInit {
    email: String;

    constructor(private authService: AuthService,
                private router: Router,
                private authGuard: AuthGuard) {
    }

    ngOnInit() {

    }

    onEmailPasswordSubmit() {
        this.authService.emailPassword(this.email).subscribe(data => {
            if (data.success) {
                console.log('You are successfully requested your password');
                this.router.navigate(['/login']);
                console.log("hello")
            } else {
                console.log('Oops, it didn\'t work out');

            }
        });
    }

}
