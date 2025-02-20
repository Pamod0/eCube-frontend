import { Component } from '@angular/core';
import { HeaderComponent } from '../layout/header/header.component';
import { HeroComponent } from '../layout/hero/hero.component';
import { LogoSliderComponent } from '../layout/logo-slider/logo-slider.component';
import { AboutUsComponent } from '../layout/about-us/about-us.component';
import { OurServicesComponent } from '../layout/our-services/our-services.component';
import { OurProjectsComponent } from '../layout/our-projects/our-projects.component';
import { ReviewsComponent } from '../layout/reviews/reviews.component';
import { AccordionComponent } from '../layout/accordion/accordion.component';
import { FooterComponent } from '../layout/footer/footer.component';
import { ContactFormComponent } from '../layout/contact-form/contact-form.component';

@Component({
    selector: 'app-home',
    imports: [
    HeaderComponent,
    HeroComponent,
    LogoSliderComponent,
    AboutUsComponent,
    OurServicesComponent,
    OurProjectsComponent,
    ReviewsComponent,
    AccordionComponent,
    FooterComponent,
    ContactFormComponent,
],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    ngAfterViewInit() {

    }
}
