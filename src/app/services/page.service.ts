import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Page} from "../models/page.model";
import {BaseService} from "./base.service";
import {CONFIG} from "./config.service";
import {map} from "rxjs/operators";


@Injectable()

export class PageService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    /** GET page by slug. Will 404 if id not found */
    getPage(slug: string): Observable<Page> {
        const url = `${CONFIG.API_URL}page/${slug}`;
        return this.http.get<Page>(url)
            .pipe(map((data: any) => data.page));
    }
}