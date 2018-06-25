import {Injectable} from "@angular/core";
import {BaseService} from "./base.service";

@Injectable()
export class AuthService extends BaseService {
    user: any;
    authToken: any;
    userId: any;

    constructor() {
        super();
        this.loadStorage();
    }

    storeUser(token, user) {
        localStorage.setItem('token_id', token);
        localStorage.setItem('user', JSON.stringify(user));
        console.log("after json stringify", JSON.stringify(user));

        this.authToken = token;
        this.user = user;
    }

    loadStorage() {
        this.authToken = localStorage.getItem('token_id');
        this.user = JSON.parse(localStorage.getItem('user'));
    }

    getToken() {
        return this.authToken;
    }

    getUserId() {
        console.log(this.user, "user >>>>");
        return this.user.id;
    }

    logout() {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    }

    isLogged() {
        return !!this.authToken;
    }
}
