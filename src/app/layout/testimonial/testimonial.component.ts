import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { GalleriaModule } from 'primeng/galleria';
import { ImageModule } from 'primeng/image';

import { Product, ProductService } from '../../shared/services/product.service';
import { PhotoService } from '../../shared/services/photo.service';

interface Review {
    company: string;
    project: string;
    review: string;
    avatar: string;
    reviewer: string;
    designation: string;
}

@Component({
    selector: 'app-testimonial',
    imports: [CommonModule, MatIconModule, CarouselModule, ButtonModule, GalleriaModule, ImageModule, TagModule],
    providers: [ProductService, PhotoService],
    templateUrl: './testimonial.component.html',
    styleUrl: './testimonial.component.scss'
})
export class TestimonialComponent {
    products!: Product[];
    reviews!: Review[];

    images!: any[];

    galleriaResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '960px',
            numVisible: 4
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];

    carouselResponsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 3,
            numScroll: 3
        },
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        },
        {
            breakpoint: '560px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    constructor(private productService: ProductService, private photoService: PhotoService) {}

    ngOnInit() {
        this.productService.getProductsSmall().then((products) => {
            this.products = products;
        });

        this.photoService.getImages().then((images) => {
            this.images = images;
        });

        this.reviews = [
            {
                company: 'Sri Lanka Cricket',
                project: 'Vendor Management System',
                review: 'Thanks to Ecube, our vendor management process has become more efficient than ever. The system is robust, user-friendly, and customized to meet our exact requirements. A game-changer for Sri Lanka Cricket!',
                avatar: 'avatar-1.png',
                reviewer: 'Sampath Prasad',
                designation: 'Procurement Manager'
            },
            {
                company: 'Sri Lanka Cricket',
                project: 'Vendor Management System',
                review: 'Thanks to Ecube, our vendor management process has become more efficient than ever. The system is robust, user-friendly, and customized to meet our exact requirements. A game-changer for Sri Lanka Cricket!',
                avatar: 'avatar-1.png',
                reviewer: 'Sampath Prasad',
                designation: 'Procurement Manager'
            },
            {
                company: 'Sri Lanka Cricket',
                project: 'Vendor Management System',
                review: 'Thanks to Ecube, our vendor management process has become more efficient than ever. The system is robust, user-friendly, and customized to meet our exact requirements. A game-changer for Sri Lanka Cricket!',
                avatar: 'avatar-1.png',
                reviewer: 'Sampath Prasad',
                designation: 'Procurement Manager'
            },
            {
                company: 'Sri Lanka Cricket',
                project: 'Vendor Management System',
                review: 'Thanks to Ecube, our vendor management process has become more efficient than ever. The system is robust, user-friendly, and customized to meet our exact requirements. A game-changer for Sri Lanka Cricket!',
                avatar: 'avatar-1.png',
                reviewer: 'Sampath Prasad',
                designation: 'Procurement Manager'
            },
            {
                company: 'Sri Lanka Cricket',
                project: 'Vendor Management System',
                review: 'Thanks to Ecube, our vendor management process has become more efficient than ever. The system is robust, user-friendly, and customized to meet our exact requirements. A game-changer for Sri Lanka Cricket!',
                avatar: 'avatar-1.png',
                reviewer: 'Sampath Prasad',
                designation: 'Procurement Manager'
            },
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
            default:
                return 'success';
        }
    }
}
