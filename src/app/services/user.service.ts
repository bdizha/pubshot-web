import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user.model";
import {CONFIG} from "./config.service";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";


@Injectable()

export class UserService {

    constructor(private http: HttpClient) {
    }

    join(user) {
        return this.http.post(CONFIG.API_URL + 'user/join', user, {})
            .pipe(map((res: any) => res));
    }

    login(user) {
        return this.http.post(CONFIG.API_URL + 'user/login', user, {})
            .pipe(map((res: any) => res));
    }

    emailPassword(data) {
        return this.http.post(CONFIG.API_URL + 'password/email', data, {})
            .pipe(map((res: any) => res));
    }

    resetPassword(data) {
        return this.http.post(CONFIG.API_URL + 'password/reset', data, {})
            .pipe(map((res: any) => res));
    }

    getProfile(): Observable<User> {
        const url = `${CONFIG.API_URL}user/show`;
        return this.http.get<User>(url, {})
            .pipe(map((data: any) => data.user));
    }
}
