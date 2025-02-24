import { Component } from '@angular/core';
import { ServiceInnerComponent } from '../service-inner.component';

@Component({
    selector: 'app-software-service',
    imports: [ServiceInnerComponent],
    templateUrl: './software-service.component.html',
    styleUrl: './software-service.component.scss'
})
export class SoftwareServiceComponent {
    serviceName: string = 'Sofware Development';

    mainTitleOne: string = `Transforming Ideas
                    <span class="poppins-bold"> into Powerful,</span> <br />
                    Custom <span class="poppins-medium">software solutions</span>`;

    imageUrl: string = '/assets/images/services/service-se.png';

    paragraphOne: string = `Software development is a dynamic and ever-evolving process that blends creativity, problem-solving, and technical expertise to build digital
                solutions that transform businesses and everyday experiences. At its core, software development is about understanding complex challenges and
                crafting tailored solutions that are intuitive, efficient, and scalable.`;

    paragraphTwo: string = `From conceptualizing the idea to coding, testing, and deploying, every step of the development journey is critical. A successful software
                solution requires not only a deep understanding of user needs but also a mastery of programming languages, frameworks, and modern development
                practices. Whether you're building a custom web application, a mobile app, or enterprise-level software, every detail counts—from performance
                optimization to user interface design.We take pride in our agile, collaborative approach, working closely with clients to turn their vision into
                reality. We focus on delivering robust, secure, and scalable software that grows with your business, ensuring long-term success. Our passion
                lies in creating seamless, reliable systems that simplify complex tasks, drive innovation, and empower organizations to achieve their goals with
                confidence.`;
}
