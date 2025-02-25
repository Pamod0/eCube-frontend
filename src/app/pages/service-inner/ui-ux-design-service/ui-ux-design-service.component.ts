import { Component } from '@angular/core';
import { Carousel } from '../carousel.model';
import { ServiceInnerComponent } from '../service-inner.component';

@Component({
    selector: 'app-ui-ux-design-service',
    imports: [ServiceInnerComponent],
    templateUrl: './ui-ux-design-service.component.html',
    styleUrl: './ui-ux-design-service.component.scss'
})
export class UiUxDesignServiceComponent {
    serviceName: string = 'Ui/UX Design';

    mainTitleOne: string = `Seamless, Intuitive, and<br />
                    <span class="poppins-medium italic">AI-Enhanced</span> UI/UX Design`;

    imageUrl: string = '/assets/images/services/ui-ux-design/service.png';

    paragraphOne: string = `UI/UX design is the foundation of every successful digital product, shaping how users interact with websites, apps, and software. 
                User Interface (UI) design focuses on the look and feel—creating visually appealing layouts, buttons, and elements that make navigation seamless. 
                User Experience (UX) design, on the other hand, ensures that every interaction is intuitive, efficient, and enjoyable. Together, UI and UX define 
                how a product functions and feels, directly impacting user satisfaction, engagement, and conversion rates.`;

    paragraphTwo: string = `At ecube, we go beyond aesthetics—we craft AI-enhanced, user-centric designs that optimize usability and elevate brand identity. 
                Our process is rooted in data-driven insights, allowing us to create intuitive workflows, responsive layouts, and frictionless experiences that 
                keep users engaged. By leveraging AI-powered design tools and predictive analytics, we accelerate the design process while ensuring every detail 
                enhances usability. Whether it’s a website, mobile app, or enterprise platform, we design with purpose—helping businesses deliver digital experiences 
                that truly connect with their audience.`;

    carouselHeader: string = 'Industry-Leading Tools for Next-Level UI/UX';

    carouselItems: Carousel[] = [
        {
            id: 1,
            image: '/assets/images/services/ui-ux-design/carousel-1.png'
        },
        {
            id: 2,
            image: '/assets/images/services/ui-ux-design/carousel-2.png'
        },
        {
            id: 3,
            image: '/assets/images/services/ui-ux-design/carousel-3.png'
        },
        {
            id: 4,
            image: '/assets/images/services/ui-ux-design/carousel-4.png'
        },
        {
            id: 5,
            image: '/assets/images/services/ui-ux-design/carousel-5.png'
        },
        {
            id: 6,
            image: '/assets/images/services/ui-ux-design/carousel-6.png'
        },
        {
            id: 7,
            image: '/assets/images/services/ui-ux-design/carousel-7.png'
        },
        {
            id: 8,
            image: '/assets/images/services/ui-ux-design/carousel-8.png'
        },
        {
            id: 9,
            image: '/assets/images/services/ui-ux-design/carousel-9.png'
        },
        {
            id: 10,
            image: '/assets/images/services/ui-ux-design/carousel-10.png'
        }
    ];

    mainTitleTwo: string = `Transformed Ideas into Beautiful, <br />
                <span class="poppins-medium italic">Functional Designs</span>`;
}
