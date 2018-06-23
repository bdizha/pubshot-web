import {Component, OnInit} from "@angular/core";
import {Shot} from "../../models/shot.model";
import {User} from "../../models/user.model";
import {ShotService} from "../../services/shot.service";

@Component({
    selector: 'app-shots',
    templateUrl: './shots.component.html',
    styleUrls: ['./shots.component.css']
})
export class ShotsComponent implements OnInit {

    shots: Shot[] = [];
    private shotService: ShotService;

    constructor(shotService: ShotService) {
        this.shotService = shotService
    }

    ngOnInit() {
        this.getShots();
    }

    getShots(): void {
        this.shotService.getShots(new User())
            .subscribe(shots => this.shots = shots);
    }

}
