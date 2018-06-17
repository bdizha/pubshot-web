import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pack} from "../models/pack.model";
import {BaseService} from "./base.service";
import {CONFIG} from "./config.service";
import {map} from "rxjs/operators";


@Injectable()

export class PackService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    /** GET page by slug. Will 404 if id not found */
    getPack(slug: string): Observable<Pack> {
        const url = `${CONFIG.API_URL}page/${slug}`;
        return this.http.get<Pack>(url)
            .pipe(map((data: any) => data.packs));
    }
}
