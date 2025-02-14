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
    link: string;
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
                avatar: 'avatar-2.png',
                reviewer: 'Sampath Prasad',
                designation: 'Procurement Manager',
                link: 'https://vms.mycricket.com.lk'
            },
            {
                company: 'Marine Environment Protection Authority',
                project: 'Oceanwatch.lk Booking Web Application',
                review: 'The Oceanwatch booking system developed by Ecube has revolutionized the way we manage marine conservation efforts. Their team delivered an efficient, user-friendly, and secure platform beyond our expectations!',
                avatar: 'avatar-3.png',
                reviewer: 'Asela Rekawa',
                designation: 'Former Chairman',
                link: 'https://www.oceanwatch.lk'
            },
            {
                company: 'Marine Environment Protection Authority',
                project: 'Monitoring System',
                review: 'Ecube’s expertise in web development has significantly improved our monitoring capabilities. The system is intuitive, reliable, and perfectly tailored to our operational needs. We couldn’t have asked for a better partner!',
                avatar: 'avatar-2.png',
                reviewer: 'Jagath Gunasekara',
                designation: 'General Manager',
                link: 'https://www.noscop.lk'
            },
            {
                company: 'Sri Lanka Basketball Federation',
                project: 'Sri Lanka Basketball Federation Main Website',
                review: 'Ecube transformed our vision into an outstanding website that truly represents Sri Lanka Basketball. Their expertise, creativity, and attention to detail made the entire process seamless. Highly recommended!',
                avatar: 'avatar-3.png',
                reviewer: 'Paul Newman',
                designation: 'Secretary',
                link: 'https://vms.mycricket.com.lk'
            },
            {
                company: 'Royal Thomian Organizing Committee',
                project: 'Thoroughbreds.lk - Royal Thomian Cricket Match Ticketing Platform and Website',
                review: 'Ecube delivered an exceptional ticketing platform for the Royal Thomian cricket match, making online booking smooth and hassle-free. Their dedication and technical skills were key to this project’s success!',
                avatar: 'avatar-2.png',
                reviewer: 'Rohan Weerasinghe',
                designation: 'Event Coordinator',
                link: 'https://vms.mycricket.com.lk'
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
            default:
                return 'success';
        }
    }
}
