import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { Tag } from 'primeng/tag';
import { ImportsModule } from './imports';

import { ProductService } from '../../shared/services/product.service';

import { Product } from './product';

@Component({
    selector: 'app-testimonial',
    imports: [ImportsModule, CommonModule, Carousel, ButtonModule, Tag],
    providers: [ProductService],
    templateUrl: './testimonial.component.html',
    styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
    products: Product[] | undefined;

    responsiveOptions: any[] | undefined;

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.responsiveOptions = [
            {
                breakpoint: '1400px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '1199px',
                numVisible: 3,
                numScroll: 1
            },
            {
                breakpoint: '767px',
                numVisible: 2,
                numScroll: 1
            },
            {
                breakpoint: '575px',
                numVisible: 1,
                numScroll: 1
            }
        ];
    }

    getSeverity(status: string) {
        switch (status) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warn';
            case 'OUTOFSTOCK':
                return 'danger';
        }
    }
}
