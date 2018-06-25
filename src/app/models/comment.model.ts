import {Shot} from "./shot.model";
import {User} from "./user.model";

export class Comment {
    id: number;
    content: string;
    shot_id: number;
    user_id: number;
    score: number;
    shot: Shot = new Shot();
    user: User = new User();
}