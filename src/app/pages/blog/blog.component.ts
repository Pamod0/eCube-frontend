import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PageEvent } from '@angular/material/paginator';

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
    selector: 'app-blog',
    imports: [HeaderComponent, MatCardModule, MatIconModule, MatPaginatorModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})
export class BlogComponent {
    pagination: pagination[];
    pagedPagination: pagination[];
    pageSize = 6;
    pageIndex = 0;

    ngOnInit() {
        this.pagination = this.getPaginationItems();
        this.updatePagedItems();
    }

    getPaginationItems(): pagination[] {
        return [
            {
                image: '/assets/images/blog/pagin-01.jpg',
                name: 'Malith Weeramuni 20 January 2025',
                subject: 'Human-Robot Interaction',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-02.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-03.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-04.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-05.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-06.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-01.jpg',
                name: 'Malith Weeramuni 20 January 2025',
                subject: 'Human-Robot Interaction',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-02.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-03.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-04.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-05.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-06.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },

            // 2nd page

            {
                image: '/assets/images/blog/pagin-06.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            },
            {
                image: '/assets/images/blog/pagin-06.jpg',
                name: 'Divya Perera',
                subject: 'Head of Digital',
                content:
                    'How do you create compelling presentations that wow your colleagues and impress your managers?',
                iconHref: 'https://www.oceanwatch.lk',
                button1: {
                    label: 'UI/UX',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-1'
                },
                button2: {
                    label: 'Research',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-2'
                },
                button3: {
                    label: 'Presentation',
                    href: 'https://www.oceanwatch.lk',
                    class: 'btn-3'
                }
            }
        ];
    }
    handlePageEvent(event: PageEvent) {
        this.pageSize = event.pageSize;
        this.pageIndex = event.pageIndex;
        this.updatePagedItems();
    }

    private updatePagedItems() {
        const startIndex = this.pageIndex * this.pageSize;
        this.pagedPagination = this.pagination.slice(startIndex, startIndex + this.pageSize);
    }

    trackByFn(index: number, item: pagination) {
        return item.name;
      }
}

// when you click the page number it will show like this "...."
// 6 numbers will be shown in the pagination
// each page will show 6 items in grid system

  