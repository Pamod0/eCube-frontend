import { Component } from '@angular/core';
import { HeaderComponent } from "../../../../layout/header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from "../../../../layout/accordion/accordion.component";
import { ContactFormComponent } from "../../../../layout/contact-form/contact-form.component";
import { FooterComponent } from "../../../../layout/footer/footer.component";

@Component({
  selector: 'app-blog-page',
  imports: [HeaderComponent, MatIconModule, AccordionComponent, ContactFormComponent, FooterComponent],
  templateUrl: './blog-page.component.html',
  styleUrl: './blog-page.component.scss'
})
export class BlogPageComponent {

}
