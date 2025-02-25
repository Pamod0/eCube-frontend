import { Component } from '@angular/core';
import { Carousel } from '../carousel.model';
import { ServiceInnerComponent } from '../service-inner.component';

@Component({
    selector: 'app-brand-identity-service',
    imports: [ServiceInnerComponent],
    templateUrl: './brand-identity-service.component.html',
    styleUrl: './brand-identity-service.component.scss'
})
export class BrandIdentityServiceComponent {
    serviceName: string = 'Brand Identity';

    mainTitleOne: string = `Distinct, Memorable, Authentic, <br />
                        <span class="poppins-medium italic">And Impactful</span> Brand Identity`;

    imageUrl: string = '/assets/images/services/brand-identity/service.png';

    paragraphOne: string = `Brand identity is the essence of how a company presents itself to the world—it's the visual and emotional representation of a brand’s values, 
                            personality, and promise. It encompasses everything from the logo and color palette to typography, imagery, and messaging, creating a cohesive 
                            and memorable experience for customers. A strong brand identity builds trust, fosters recognition, and differentiates a business in a crowded 
                            market.`;

    paragraphTwo: string = `At ecube, we understand that brand identity is much more than just aesthetics. It’s about telling a compelling story that resonates with your target 
                            audience and reflects your company’s mission and values. Our team combines creative design with strategic insights to craft distinctive brand identities 
                            that stand out and leave a lasting impression. By leveraging market trends and audience analysis, we ensure that your brand identity is both relevant 
                            and timeless. From logos and brand guidelines to digital assets and marketing materials, we create a unified visual language that strengthens your brand’s 
                            presence and fosters deeper connections with your customers.`;

    carouselHeader: string = 'Transformative Tools for Unforgettable Brand Identity';

    carouselItems: Carousel[] = [
        {
            id: 1,
            image: '/assets/images/services/brand-identity/carousel-1.png'
        },
        {
            id: 2,
            image: '/assets/images/services/brand-identity/carousel-2.png'
        },
        {
            id: 3,
            image: '/assets/images/services/brand-identity/carousel-3.png'
        },
        {
            id: 4,
            image: '/assets/images/services/brand-identity/carousel-4.png'
        },
        {
            id: 5,
            image: '/assets/images/services/brand-identity/carousel-5.png'
        },
        {
            id: 6,
            image: '/assets/images/services/brand-identity/carousel-6.png'
        },
        {
            id: 7,
            image: '/assets/images/services/brand-identity/carousel-7.png'
        },
        {
            id: 8,
            image: '/assets/images/services/brand-identity/carousel-8.png'
        },
        {
            id: 9,
            image: '/assets/images/services/brand-identity/carousel-9.png'
        },
        {
            id: 10,
            image: '/assets/images/services/brand-identity/carousel-10.png'
        }
    ];

    mainTitleTwo: string = `Bringing Your Brand’s Vision to Life <br />
              with Impactful, <span class="poppins-medium italic">Distinctive Identity</span>`;
}
