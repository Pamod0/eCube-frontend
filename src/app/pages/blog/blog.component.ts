import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
    imports: [HeaderComponent, MatCardModule, MatIconModule],
    templateUrl: './blog.component.html',
    styleUrl: './blog.component.scss'
})
export class BlogComponent {
    pagination: pagination[];

    ngOnInit() {
        this.pagination = [
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
            }
        ];
    }
}
