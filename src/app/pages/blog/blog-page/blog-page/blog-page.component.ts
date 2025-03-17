import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from '../../../../layout/accordion/accordion.component';
import { ContactFormComponent } from '../../../../layout/contact-form/contact-form.component';
import { FooterComponent } from '../../../../layout/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { BlogpageService } from './blogpage.service';


@Component({
    selector: 'app-blog-page',
    imports: [HeaderComponent, MatIconModule, AccordionComponent, ContactFormComponent, FooterComponent],
    templateUrl: './blog-page.component.html',
    styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {
    blogpages: any;
    blogpage: any;

    

    private route = inject(ActivatedRoute);
    private _blogpageService = inject(BlogpageService);

    ngOnInit() {
        this._blogpageService.getBlogPages().subscribe((data) => {
            this.blogpages = data;
            console.log(this.blogpages);

            this.route.paramMap.subscribe((params) => {
                const serviceKey = params.get('blog');

                switch (serviceKey) {
                    case 'pageone':
                        this.blogpage = this.blogpages['pageone'];
                        break;
                    case 'pagetwo':
                        this.blogpage = this.blogpages['pagetwo'];
                        break;
                }
            });

            console.log(this.blogpage);
        });
    }
    
    
}

