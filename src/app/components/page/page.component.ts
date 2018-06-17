import {Component, OnInit} from "@angular/core";
import {PageService} from "../../services/page.service";
import {CommonService} from "../../services/common.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Location} from "@angular/common";
import {Page} from "../../models/page.model";

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.css']
})

export class PageComponent implements OnInit {
    page: Page = new Page();

    constructor(private route: ActivatedRoute,
                private router: Router,
                private pageService: PageService,
                private commonService: CommonService,
                private location: Location) {

        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    }

    ngOnInit(): void {
        this.commonService.isDark = this.route.snapshot.data.is_dark;
        this.getPage();
    }

    getPage(): void {
        const slug = this.route.snapshot.paramMap.get('slug');
        this.pageService.getPage(slug)
            .subscribe(page => this.page = page);
    }

    goBack(): void {
        this.location.back();
    }

}