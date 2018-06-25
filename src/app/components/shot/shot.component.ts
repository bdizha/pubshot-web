import {Component, Input, OnInit} from "@angular/core";
import {Shot} from "../../models/shot.model";

@Component({
    selector: 'app-shot',
    templateUrl: './shot.component.html',
    styleUrls: ['./shot.component.css']
})
export class ShotComponent implements OnInit {

    @Input() shot: Shot;

    constructor() {
    }

    ngOnInit() {
        console.log("shot", this.shot);
    }
}