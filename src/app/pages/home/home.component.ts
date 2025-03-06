import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { LogoSliderComponent } from './logo-slider/logo-slider.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { OurProjectsComponent } from '../our-projects/our-projects.component';
import { ReviewsComponent } from './reviews/reviews.component';

@Component({
    selector: 'app-home',
    imports: [
        HeroComponent,
        LogoSliderComponent,
        AboutUsComponent,
        OurServicesComponent,
        OurProjectsComponent,
        ReviewsComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
    ngAfterViewInit() {}
}
