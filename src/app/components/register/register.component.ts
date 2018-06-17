import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    user = {
        name: "",
        username: "",
        email: "",
        password: ""
    };

    registerForm: FormGroup;

    constructor(private userService: UserService,
                private router: Router,) {
    }

    ngOnInit(): void {
        this.registerForm = new FormGroup({
            'name': new FormControl(this.user.name, Validators.required),
            'username': new FormControl(this.user.username, Validators.required),
            'email': new FormControl(this.user.email,
                [
                    Validators.required,
                    Validators.email
                ]),
            'password': new FormControl(this.user.password, Validators.required)
        });
    }

    onRegisterSubmit() {
        let user = {
            name: this.registerForm.value.name,
            username: this.registerForm.value.username,
            email: this.registerForm.value.email,
            password: this.registerForm.value.password
        };

        this.userService.join(user).subscribe(data => {
            if (data.success) {
                console.log('You are now registered. You may log in');
                this.router.navigate(['/login']);
            } else {
                console.log('You are not register');
                this.router.navigate(['/register']);
            }
        });

    }

    get name() {
        return this.registerForm.get('name');
    }

    get username() {
        return this.registerForm.get('username');
    }

    get email() {
        return this.registerForm.get('email');
    }

    get password() {
        return this.registerForm.get('password');
    }
}
