import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TestimonialComponent } from './layout/testimonial/testimonial.component';
import { AccordionComponent } from './layout/accordion/accordion.component';
import { FooterComponent } from './layout/footer/footer.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'test',
        // component: TestimonialComponent
        component: FooterComponent
    }
    
];
