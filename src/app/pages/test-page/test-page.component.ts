import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-test-page',
    imports: [],
    templateUrl: './test-page.component.html',
    styleUrl: './test-page.component.scss'
})
export class TestPageComponent {
    service: any;

    services = {
        'web-development': {
            title: 'Web Development',
            description: 'We create modern, responsive, and dynamic websites.',
            image: 'assets/images/web-development.jpg'
        },
        'seo-optimization': {
            title: 'SEO Optimization',
            description: 'Improve your website ranking with expert SEO strategies.',
            image: 'assets/images/seo.jpg'
        },
        'digital-marketing': {
            title: 'Digital Marketing',
            description: 'Grow your business with effective online marketing campaigns.',
            image: 'assets/images/digital-marketing.jpg'
        }
    };

    private route = inject(ActivatedRoute);

    ngOnInit() {
        this.route.paramMap.subscribe((params) => {
            const serviceKey = params.get('service');
            this.service = this.services[serviceKey || 'web-development'];
        });
    }
}
