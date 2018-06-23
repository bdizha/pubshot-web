import {Component, OnInit} from "@angular/core";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {AppRouterService} from "../../services/router.service";
import { Location } from '@angular/common';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

    constructor(private authService: AuthService,
                private routerService: AppRouterService,
                private location: Location,
                private router: Router) {
    }

    ngOnInit() {
    }

    OnLogout() {
        this.authService.logout();
        this.router.navigate(['/']);
        return false;
    }

    goBack(): void {
        this.location.back();
    }
}
