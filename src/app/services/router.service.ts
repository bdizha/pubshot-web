import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Router} from "@angular/router";

@Injectable()
export class AppRouterService {

    constructor(private router: Router) {
    }

    public get(key): any {
        return this.getRouteData(key);
    }

    private getRouteData(data: string): any {
        const root = this.router.routerState.snapshot.root;

        console.log(this.lastChild(root).data[data], "....");
        return this.lastChild(root).data[data];
    }

    private lastChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
        if (route.firstChild) {
            return this.lastChild(route.firstChild);
        } else {
            return route;
        }
    }
}