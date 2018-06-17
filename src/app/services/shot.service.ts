import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {Shot} from "../models/shot.model";

import {CONFIG} from "./config.service";
import {map} from "rxjs/operators";


@Injectable()

export class ShotService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    getShots(): Observable<Shot[]> {
        return this.http.get<Shot[]>(CONFIG.API_URL + 'shots')
            .pipe(map((data: any) => data.shots));
    }
}
