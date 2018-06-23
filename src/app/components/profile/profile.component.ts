import {Component, OnInit} from "@angular/core";
import {ShotService, UserService} from "../../services";
import {User} from "../../models/user.model";
import {Shot} from "../../models/shot.model";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    user: User = new User();
    shots: Shot[] = [];

    constructor(private userService: UserService,
                private shotService: ShotService) {
    }

    ngOnInit() {
        this.getProfile();
    }

    getProfile(): void {
        this.userService.getProfile()
            .subscribe(user => {
                this.user = user;
                this.getShots(this.user);
            });
    }

    getShots(user: User): void {

        console.log(user, " user ????");


        this.shotService.getShots(user)
            .subscribe(shots => {
                this.shots = shots;

                console.log(this.shots, " shots ...");
            });
    }

}
