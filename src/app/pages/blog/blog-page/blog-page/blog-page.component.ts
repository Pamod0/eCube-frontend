import { Component, inject } from '@angular/core';
import { HeaderComponent } from '../../../../layout/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from '../../../../layout/accordion/accordion.component';
import { ContactFormComponent } from '../../../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../../../layout/footer/footer.component';
import { ActivatedRoute } from '@angular/router';
import { BlogpageService } from './blogpage.service';

@Component({
  selector: 'app-blog-page',
  imports: [
    HeaderComponent,
    MatIconModule,
    AccordionComponent,
    ContactFormComponent,
    FooterComponent,
  ],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss',
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
          case '1':
            this.blogpage = this.blogpages['1'];
            break;
          case '2':
            this.blogpage = this.blogpages['2'];
            break;
          case '3':
            this.blogpage = this.blogpages['3'];
            break;
          case '4':
            this.blogpage = this.blogpages['4'];
            break;
          case '5':
            this.blogpage = this.blogpages['5'];
            break;
          case '6':
            this.blogpage = this.blogpages['6'];
            break;
          case '7':
            this.blogpage = this.blogpages['7'];
            break;
          case '8':
            this.blogpage = this.blogpages['8'];
            break;
          case '9':
            this.blogpage = this.blogpages['9'];
            break;
          case '10':
            this.blogpage = this.blogpages['10'];
            break;
        }
      });

      console.log(this.blogpage);
    });
  }
}
