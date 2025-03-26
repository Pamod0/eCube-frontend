import { Component } from '@angular/core';
import { ServiceInnerComponent } from '../service-inner.component';
import { Carousel } from '../carousel.model';

@Component({
  selector: 'app-software-service',
  imports: [ServiceInnerComponent],
  templateUrl: './software-service.component.html',
  styleUrl: './software-service.component.scss',
})
export class SoftwareServiceComponent {
  serviceName: string = 'Sofware Development';

  mainTitleOne: string = `Transforming Ideas <span class="poppins-medium italic"> into Powerful,</span> <br />
                    Custom <span class="poppins-medium italic">software solutions</span>`;

  imageUrl: string = '/assets/images/services/service.png';

  paragraphOne: string = `Software development is a dynamic and ever-evolving process that blends creativity, problem-solving, and technical expertise 
                            to build digital solutions that transform businesses and everyday experiences. At its core, software development is about 
                            understanding complex challenges and crafting tailored solutions that are intuitive, efficient, and scalable.`;

  paragraphTwo: string = `From conceptualizing the idea to coding, testing, and deploying, every step of the development journey is critical. 
                          A successful software solution requires not only a deep understanding of user needs but also a mastery of programming languages, 
                          frameworks, and modern development practices. Whether you're building a custom web application, a mobile app, or enterprise-level 
                          software, every detail counts—from performance optimization to user interface design.We take pride in our agile, collaborative approach, 
                          working closely with clients to turn their vision into reality. We focus on delivering robust, secure, and scalable software that grows 
                          with your business, ensuring long-term success. Our passion lies in creating seamless, reliable systems that simplify complex tasks, 
                          drive innovation, and empower organizations to achieve their goals with confidence.`;

  carouselHeader: string = 'Innovative Solutions with Cutting-Edge Software Development';

  carouselItems: Carousel[] = [
    {
      id: 1,
      image: '/assets/images/services/carousel-1.png',
    },
    {
      id: 2,
      image: '/assets/images/services/carousel-2.png',
    },
    {
      id: 3,
      image: '/assets/images/services/carousel-3.png',
    },
    {
      id: 4,
      image: '/assets/images/services/carousel-4.png',
    },
    {
      id: 5,
      image: '/assets/images/services/carousel-5.png',
    },
    {
      id: 6,
      image: '/assets/images/services/carousel-6.png',
    },
    {
      id: 7,
      image: '/assets/images/services/carousel-7.png',
    },
    {
      id: 8,
      image: '/assets/images/services/carousel-8.png',
    },
    {
      id: 9,
      image: '/assets/images/services/carousel-9.png',
    },
    {
      id: 10,
      image: '/assets/images/services/carousel-10.png',
    },
  ];

  mainTitleTwo: string = `Turning visions into robust, <br />
                User-centric <span class="poppins-medium italic">Software Solutions</span>`;
}
