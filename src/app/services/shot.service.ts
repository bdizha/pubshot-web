import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {Shot} from "../models/shot.model";
import {User} from "../models/user.model";

import {CONFIG} from "./config.service";
import {map} from "rxjs/operators";


@Injectable()

export class ShotService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    getShots(user: User): Observable<Shot[]> {
        let url = `${CONFIG.API_URL}shots`;

        if (user.id !== null) {
            url += "/" + user.id;
        }
        
        return this.http.get<Shot[]>(url)
            .pipe(map((data: any) => data.shots.data));
    }

    getShot(slug: string): Observable<Shot> {
        let url = `${CONFIG.API_URL}shot/${slug}`;
        return this.http.get<Shot>(url)
            .pipe(map((data: any) => data.shot));
    }
}
