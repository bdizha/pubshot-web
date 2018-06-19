import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService,
                private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let token = this.authService.getToken();
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Content-Type': `application/json`,
                    Authorization: `Bearer ${token}`
                }
            });
        }

        return next.handle(request)
            .pipe(
                catchError((err: any) => {
                    if (err.status === 401) {
                        this.authService.logout();
                        this.router.navigate(['/login']);
                    }
                    return of(err);
                })
            );

    }
}