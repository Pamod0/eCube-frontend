import { Component } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { PaginatorIntlService } from './paginator-intl.service';

import Blogs from './blogs.json';
import { HeaderComponent } from '../header/header.component';

interface Blog {
    image: string;
    name: string;
    subject: string;
    content: string;
    iconHref: string;
    button1: BlogButton;
    button2: BlogButton;
    button3: BlogButton;
}

interface BlogButton {
    label: string;
    href: string;
    class: string;
}

interface pagination {
    image: string;
    name: string;
    subject: string;
    content: string;
    iconHref: string;
    button1: { label: string; href: string; class: string };
    button2: { label: string; href: string; class: string };
    button3: { label: string; href: string; class: string };
}

@Component({
    selector: 'app-test',
    imports: [MatPaginatorModule, MatIconModule, HeaderComponent],
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss',
    providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }]
})
export class TestComponent {
    currentPage = 0;
    pageSize = 10;

    blogs: Blog[] = Blogs;
    paginatedBlogs = this.blogs.slice(0, this.pageSize);

    pagination: pagination[];
    pagedPagination: pagination[];

    ngAfterViewInit() {
        this.pagedPagination = this.pagination.slice(0, this.pageSize);
    }

    handlePageEvent(pageEvent: PageEvent) {
        this.currentPage = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
        const startIndex = this.currentPage * this.pageSize;
        const endIndex = startIndex + this.pageSize;

        this.paginatedBlogs = this.blogs.slice(startIndex, endIndex);
    }
}
