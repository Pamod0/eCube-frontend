import { Component } from '@angular/core';
import { AccordionComponent } from '../accordion/accordion.component';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-footer-extended',
  imports: [AccordionComponent, ContactFormComponent, FooterComponent],
  templateUrl: './footer-extended.component.html',
  styleUrl: './footer-extended.component.scss',
})
export class FooterExtendedComponent {}
