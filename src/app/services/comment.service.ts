import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BaseService} from "./base.service";
import {Comment} from "../models/comment.model";
import {Shot} from "../models/shot.model";
import {CONFIG} from "./config.service";
import {map} from "rxjs/operators";


@Injectable()

export class CommentService extends BaseService {

    constructor(private http: HttpClient) {
        super();
    }

    getComments(shot: Shot): Observable<Comment[]> {

        console.log("shot comments", shot);

        let url = CONFIG.API_URL + 'shot/' + shot.id + '/comments';
        return this.http.get<Comment[]>(url)
            .pipe(map((data: any) => data.comments.data));
    }

    setComment(comment: Comment) {
        let url = CONFIG.API_URL + 'comment';
        return this.http.post(url, comment, {})
            .pipe(map((res: any) => res));
    }
}
