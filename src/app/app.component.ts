import {AfterViewInit, Component, OnInit, Renderer2} from "@angular/core";
import {AuthService} from "./services/auth.service";
import {AppRouterService} from "./services/router.service";
import {NavigationCancel, NavigationEnd, NavigationStart, Router} from "@angular/router";
import {filter} from "rxjs/operators";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
    isHome: boolean = false;
    isDark: boolean = false;
    isModal: boolean = false;
    isLogged: boolean = false;
    routerEvents: any;
    isLoading: boolean = false;

    constructor(private authService: AuthService,
                private renderer: Renderer2,
                private router: Router,
                private routerService: AppRouterService) {
    }

    ngOnInit() {
        this.routerEvents = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe(() => {
                this.setIsDark();
                this.setIsHome();
                this.setIsLogged();
                this.setIsModal();
            });
    }

    ngAfterViewInit() {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationStart) {
                    this.isLoading = true;
                }
                else if (
                    event instanceof NavigationEnd ||
                    event instanceof NavigationCancel
                ) {
                    setTimeout(() => {
                        this.isLoading = false;
                        console.log("isLoading", this.isLoading);
                    }, 1500);
                }
            });
    }

    isWelcome() {
        return !this.authService.isLogged() && this.isHome;
    }

    setIsHome() {
        this.isHome = this.router.url === "/";
    }

    setIsModal() {
        this.isModal = this.routerService.get("isModal");

        if (this.isModal) {
            this.renderer.addClass(document.body, 'pub-modal');
        }
        else {
            this.renderer.removeClass(document.body, 'pub-modal');
        }
    }

    setIsDark() {
        this.isDark = this.routerService.get("isDark");

        if (this.isDark) {
            this.renderer.addClass(document.body, 'pub-dark');
        }
        else {
            this.renderer.removeClass(document.body, 'pub-dark');
        }
    }

    setIsLogged() {
        this.isLogged = this.authService.isLogged();

        if (this.isLogged) {
            console.log("pub-logged");
            this.renderer.addClass(document.body, 'pub-logged');
        }
        else {
            console.log("not pub-logged");
            this.renderer.removeClass(document.body, 'pub-logged');
        }
    }
}