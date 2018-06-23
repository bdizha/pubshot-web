import {Component, OnInit} from "@angular/core";
import {ShotService} from "../../services/shot.service";
import {CommonService} from "../../services/common.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Shot} from "../../models/shot.model";

@Component({
    selector: 'app-shot-modal',
    templateUrl: './shot.modal.component.html',
    styleUrls: ['./shot.component.css']
})

export class ShotModalComponent implements OnInit {
    shot: Shot = new Shot();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private shotService: ShotService,
                private commonService: CommonService) {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.commonService.isDark = this.route.snapshot.data.is_dark;
        this.getShot();
    }

    getShot(): void {
        const slug = this.route.snapshot.paramMap.get('slug');
        this.shotService.getShot(slug)
            .subscribe(shot => this.shot = shot);
    }

}