import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';

import { PaginatorIntlService } from './paginator-intl.service';

import { Blog } from './blog.interface';

import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';

import Blogs from './blogs.json';


@Component({
    selector: 'app-blog',
    imports: [MatPaginatorModule, MatIconModule, HeaderComponent],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss',
    providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }]
})
export class BlogComponent {
    currentPage = 0;
    pageSize = 10;

    blogs: Blog[] = Blogs;
    paginatedBlogs = this.blogs.slice(0, this.pageSize);

    handlePageEvent(pageEvent: PageEvent) {
        this.currentPage = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
        const startIndex = this.currentPage * this.pageSize;
        const endIndex = startIndex + this.pageSize;

        this.paginatedBlogs = this.blogs.slice(startIndex, endIndex);
    }
}
