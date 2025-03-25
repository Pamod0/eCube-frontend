import { Component } from '@angular/core';
import { ServiceInnerComponent } from '../service-inner.component';
import { Carousel } from '../carousel.model';

@Component({
  selector: 'app-web-design-service',
  imports: [ServiceInnerComponent],
  templateUrl: './web-design-service.component.html',
  styleUrl: './web-design-service.component.scss',
})
export class WebDesignServiceComponent {
  serviceName: string = 'Web Design';

  mainTitleOne: string = `Crafting Stunning, <span class="poppins-medium italic"> High-Performance</span> <br />
                    Websites with <span class="poppins-medium italic">AI Precision</span>`;

  imageUrl: string = '/assets/images/services/web-design/service.png';

  paragraphOne: string = `Web design is the art and science of creating visually appealing, user-friendly, and high-performing websites that leave a lasting impression. 
                          A great website is more than just colors and layouts—it’s a strategic digital experience that guides visitors, enhances engagement, and drives 
                          conversions. Every element, from typography to navigation, plays a role in how users perceive and interact with your brand. 
                          A well-crafted website builds credibility, strengthens brand identity, and ensures a seamless journey across all devices.`;

  paragraphTwo: string = `At ecube, we take web design to the next level with an AI-powered, results-driven approach. By combining creativity with advanced technologies, 
                          we create websites that are not only aesthetically stunning but also optimized for speed, performance, and user experience. Our AI-driven processes 
                          accelerate development while maintaining precision, ensuring that your website is launched faster without compromising quality. 
                          Whether you're a startup looking to make an impact or an enterprise aiming for digital transformation, we craft custom solutions 
                          that align with your business goals and industry standards.`;

  carouselHeader: string = 'Innovative Tech Stack for Modern Websites';

  carouselItems: Carousel[] = [
    {
      id: 1,
      image: '/assets/images/services/web-design/carousel-1.png',
    },
    {
      id: 2,
      image: '/assets/images/services/web-design/carousel-2.png',
    },
    {
      id: 3,
      image: '/assets/images/services/web-design/carousel-3.png',
    },
    {
      id: 4,
      image: '/assets/images/services/web-design/carousel-4.png',
    },
    {
      id: 5,
      image: '/assets/images/services/web-design/carousel-5.png',
    },
    {
      id: 6,
      image: '/assets/images/services/web-design/carousel-6.png',
    },
    {
      id: 7,
      image: '/assets/images/services/web-design/carousel-7.png',
    },
    {
      id: 8,
      image: '/assets/images/services/web-design/carousel-8.png',
    },
    {
      id: 9,
      image: '/assets/images/services/web-design/carousel-9.png',
    },
    {
      id: 10,
      image: '/assets/images/services/web-design/carousel-10.png',
    },
  ];

  mainTitleTwo: string = `Empowered Businesses <br />
              <span class="poppins-medium italic">Across Industries</span>`;
}
