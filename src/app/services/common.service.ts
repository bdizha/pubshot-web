import {Injectable} from "@angular/core";

@Injectable()
export class CommonService {

    welcome = true;
    isDark = false;

    setIsDark(isDark: boolean) {
        console.log("assigning data variable: ", isDark);
        this.isDark = isDark;
    }

    getIsDark() {
        return this.isDark;
    }
}
