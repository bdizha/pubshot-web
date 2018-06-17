import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {BaseService} from "./base.service";
import {CONFIG} from "./config.service";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService extends BaseService {
    user: any;
    authToken: any;

    constructor(private http: HttpClient) {
        super();
        this.loadToken();
    }

    storeUser(token, user) {
        localStorage.setItem('token_id', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    }

    loadToken() {
        this.authToken = localStorage.getItem('token_id');
        console.log(this.authToken, "loadToken >>>>");
    }

    getToken() {
        console.log(this.authToken, "getToken >>>>");
        return this.authToken;
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    isLogged() {
        return !!this.authToken;
    }

    //  catchError(this.handleError('getShots', []))


}
