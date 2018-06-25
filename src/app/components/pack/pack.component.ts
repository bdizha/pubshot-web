import {Component, Input, OnInit} from "@angular/core";
import {Pack} from "../../models/pack.model";
import {Location} from "@angular/common";

@Component({
    selector: 'app-pack',
    templateUrl: './pack.component.html',
    styleUrls: ['./pack.component.css']
})
export class PackComponent implements OnInit {

    @Input() pack: Pack;

    constructor(private location: Location) {
    }

    ngOnInit() {
        console.log("pack", this.pack);
    }

    goBack(): void {
        this.location.back();
    }
}