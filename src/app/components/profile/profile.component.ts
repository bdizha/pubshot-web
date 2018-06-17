import {Component, OnInit} from "@angular/core";
import {UserService} from "../../services";
import {User} from "../../models/user.model";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: User = new User();

    constructor(private userService: UserService) {
    }

    ngOnInit() {
        this.getProfile();
    }

    getProfile(): void {
        this.userService.getProfile()
            .subscribe(user => this.user = user);
    }

}
