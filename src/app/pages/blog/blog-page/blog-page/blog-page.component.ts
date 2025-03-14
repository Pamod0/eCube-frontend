import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from '../../../../layout/accordion/accordion.component';
import { ContactFormComponent } from '../../../../layout/contact-form/contact-form.component';
import { FooterComponent } from '../../../../layout/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { BlogpageService } from './blogpage.service';
import { BlogPage } from './blogpage.interface';

@Component({
    selector: 'app-blog-page',
    imports: [HeaderComponent, MatIconModule, AccordionComponent, ContactFormComponent, FooterComponent],
    templateUrl: './blog-page.component.html',
    styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {
    Blogpages: BlogPage[];
    Blogpage: BlogPage;

    private route = inject(ActivatedRoute);
    private _blogpageService = inject(BlogpageService);

    ngOnInit() {
        this._blogpageService.getBlogPages().subscribe((data) => {
            this.Blogpages = data;
            console.log(this.Blogpages);

            this.route.paramMap.subscribe((params) => {
                const serviceKey = params.get('Blog');

                switch (serviceKey) {
                    case 'pageone':
                        this.Blogpage = this.Blogpages['pageone'];
                        break;
                    case 'pagetwo':
                        this.Blogpage = this.Blogpages['pagetwo'];
                        break;
                    case 'pagethree':
                        this.Blogpage = this.Blogpages['pagethree'];
                        break;
                    default:
                        this.Blogpage = this.Blogpages['pageone'];
                }
            });

            console.log(this.Blogpage);
        });
    }
}
