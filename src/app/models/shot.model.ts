import {Pack} from "./pack.model";
import {User} from "./user.model";

export class Shot {
    id: number;
    caption: string;
    media: string;
    pack_id: number;
    user_id: number;
    created_at: string;
    updated_at: string;
    pack: Pack = new Pack();
    user: User = new User();
}