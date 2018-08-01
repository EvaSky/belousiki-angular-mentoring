import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BreadCrumb } from './models/breadcrumb.interface';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

    @Input() currentPage;

    constructor(private activatedRoute: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        console.log(this.currentPage);
    }

}
