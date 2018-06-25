import {Component, Input, OnInit} from "@angular/core";
import {Comment} from "../../models/comment.model";

@Component({
    selector: 'app-comment',
    templateUrl: './comment.component.html'
})
export class CommentComponent implements OnInit {

    @Input() comment: Comment;

    constructor() {
    }

    ngOnInit() {
        console.log("comment", this.comment);
    }
}
