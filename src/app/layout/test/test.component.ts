import { Component } from '@angular/core';
import { MatPaginatorIntl, MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PaginatorIntlService } from './paginator-intl.service';

import Blogs from './blogs.json';

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

@Component({
    selector: 'app-test',
    imports: [MatPaginatorModule],
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss',
    providers: [{ provide: MatPaginatorIntl, useClass: PaginatorIntlService }]
})
export class TestComponent {
    blogs: Blog[] = Blogs;
    courses = Array.from({ length: 100 }, (_, i) => ({
        id: i + 1,
        title: `Course ${i + 1}`,
        description: `Description of Course ${i + 1}`
    }));

    currentPage = 0;
    pageSize = 10;
    paginatedCourses = this.courses.slice(0, this.pageSize);
    paginatedBlogs = this.blogs.slice(0, this.pageSize);

    handlePageEvent(pageEvent: PageEvent) {
        console.log('handlePageEvent', pageEvent);

        this.currentPage = pageEvent.pageIndex;
        this.pageSize = pageEvent.pageSize;
        const startIndex = this.currentPage * this.pageSize;
        const endIndex = startIndex + this.pageSize;
        this.paginatedCourses = this.courses.slice(startIndex, endIndex);
        this.paginatedBlogs = this.blogs.slice(startIndex, endIndex);
    }
}
