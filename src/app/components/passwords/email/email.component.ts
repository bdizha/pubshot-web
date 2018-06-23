import {Component, OnInit} from "@angular/core";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-password-email',
    templateUrl: './email.component.html',
    styleUrls: ['./email.component.css']
})
export class PasswordEmailComponent implements OnInit {
    user = {
        email: ""
    };

    emailForm: FormGroup;

    constructor(private userService: UserService,
                private router: Router) {
    }

    ngOnInit() {
        this.emailForm = new FormGroup({
            'email': new FormControl(this.user.email,
                [
                    Validators.required,
                    Validators.email
                ])
        });
    }

    onEmailPasswordSubmit() {
        let user = {
            email: this.emailForm.value.email
        };

        this.userService.emailPassword(user.email).subscribe(data => {
            if (data.success) {
                console.log('You are successfully requested your password');
                this.router.navigate(['/login']);
                console.log("hello")
            } else {
                console.log('Oops, it didn\'t work out');

            }
        });
    }

    get email() {
        return this.emailForm.get('email');
    }

}
