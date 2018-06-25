import {Component, Input, OnInit} from "@angular/core";
import {Comment} from "../../models/comment.model";
import {Shot} from "../../models/shot.model";
import {CommentService} from "../../services/comment.service";
import {AuthService} from "../../services/auth.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-comments',
    templateUrl: './comments.component.html'
})
export class CommentsComponent implements OnInit {

    @Input() shot: Shot;
    comment: Comment = new Comment();

    commentForm: FormGroup;
    comments: Comment[] = [];

    constructor(private commentService: CommentService,
                private authService: AuthService) {
    }

    ngOnInit() {
        this.commentForm = new FormGroup({
            'content': new FormControl(this.comment.content,
                [
                    Validators.required
                ])
        });

        this.getComments();
    }

    getComments(): void {
        this.commentService.getComments(this.shot)
            .subscribe(comments => this.comments = comments);
    }

    onCommentSubmit() {
        this.comment.content = this.commentForm.value.content;
        this.comment.user_id = this.authService.getUserId();
        this.comment.shot_id = this.shot.id;

        this.commentService.setComment(this.comment).subscribe(data => {
            if (data.success) {
                this.comments.push(data.comment);
            }
        });
    }

    get content() {
        return this.commentForm.get('comment');
    }

}
