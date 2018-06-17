import {Component, Input, OnInit} from "@angular/core";
import {Shot} from "../../models/shot.model";
import {Location} from "@angular/common";

@Component({
    selector: 'app-shot',
    templateUrl: './shot.component.html',
    styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {

    @Input() shot: Shot;

    constructor(private location: Location) {
    }

    ngOnInit() {
        console.log("shot", this.shot);
    }

    goBack(): void {
        this.location.back();
    }
}