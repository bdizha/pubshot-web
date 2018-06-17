import {Component, OnInit} from "@angular/core";
import {CommonService} from "../../services/common.service";

@Component({
    selector: 'app-welcome',
    templateUrl: './welcome.component.html',
    styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent implements OnInit {

    constructor(private commonService: CommonService) {
    }

    ngOnInit() {

    }

}