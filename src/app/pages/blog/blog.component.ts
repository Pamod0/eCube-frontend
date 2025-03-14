import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';

import { PaginatorIntlService } from '../../services/paginator-intl.service';


import { blog } from './blog.interface';

import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

import Blogs from './blog.json';

import { FooterExtendedComponent } from "../../layout/footer-extended/footer-extended.component";


@Component({
    selector: 'app-blog',
    imports: [MatPaginatorModule, MatIconModule, HeaderComponent, FooterExtendedComponent],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }]
})
export class BlogComponent {
    currentPage = 0;
    pageSize = 10;

    blogs: blog[] = Blogs;
    paginatedBlogs = this.blogs.slice(0, this.pageSize);

    handlePageEvent(pageEvent: PageEvent) {
        this.currentPage = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
        const startIndex = this.currentPage * this.pageSize;
        const endIndex = startIndex + this.pageSize;

        this.paginatedBlogs = this.blogs.slice(startIndex, endIndex);
    }
}
