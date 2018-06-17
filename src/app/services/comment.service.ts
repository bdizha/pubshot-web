import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {BaseService} from "./base.service";
import {Comment} from "../models/comment.model";

import {CONFIG} from "./config.service";
import {catchError, map, tap} from "rxjs/operators";


@Injectable()

export class CommentService extends BaseService{

    constructor(private http: HttpClient) {
        super();
    }

    getComments (): Observable<Comment[]> {
        return this.http.get<Comment[]>(CONFIG.API_URL + 'shots')
            .pipe(map((data:any) => data.shots));
    }
}
