import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterExtendedComponent } from '../../layout/footer-extended/footer-extended.component';
import { ReviewsComponent } from "../../layout/reviews/reviews.component";

interface Carousel {
    id: number;
    image: string;
}

@Component({
    selector: 'app-service-inner',
    imports: [HeaderComponent, FooterExtendedComponent, ReviewsComponent],
    templateUrl: './service-inner.component.html',
    styleUrl: './service-inner.component.scss'
})
export class ServiceInnerComponent {
    carouselItems: Carousel[];

    ngOnInit() {
        this.carouselItems = [
            {
                id: 1,
                image: '/assets/images/services/carousel-1.png'
            },
            {
                id: 2,
                image: '/assets/images/services/carousel-2.png'
            },
            {
                id: 3,
                image: '/assets/images/services/carousel-3.png'
            },
            {
                id: 4,
                image: '/assets/images/services/carousel-4.png'
            },
            {
                id: 5,
                image: '/assets/images/services/carousel-5.png'
            },
            {
                id: 6,
                image: '/assets/images/services/carousel-6.png'
            },
            {
                id: 7,
                image: '/assets/images/services/carousel-7.png'
            },
            {
                id: 8,
                image: '/assets/images/services/carousel-8.png'
            },
            {
                id: 9,
                image: '/assets/images/services/carousel-9.png'
            },
            {
                id: 10,
                image: '/assets/images/services/carousel-10.png'
            }
        ];
    }
}
