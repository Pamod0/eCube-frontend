import { Component, Input } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterExtendedComponent } from '../../layout/footer-extended/footer-extended.component';
import { ReviewsComponent } from '../../layout/reviews/reviews.component';
import { Carousel } from './carousel.model';

@Component({
    selector: 'app-service-inner',
    imports: [HeaderComponent, FooterExtendedComponent, ReviewsComponent],
    templateUrl: './service-inner.component.html',
    styleUrl: './service-inner.component.scss'
})
export class ServiceInnerComponent {
    @Input() serviceName: string = '';
    @Input() mainTitleOne: string = '';
    @Input() imageUrl: string = '';
    @Input() paragraphOne: string = '';
    @Input() paragraphTwo: string = '';
    @Input() carouselHeader: string = '';
    @Input() carouselItemss: Carousel[] = [];
    @Input() mainTitleTwo: string = '';

    carouselItems: Carousel[];

    ngOnInit() {}
}
