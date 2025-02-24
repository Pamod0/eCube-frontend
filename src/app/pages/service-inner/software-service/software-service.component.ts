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
    imageClass: string = 'image-container';
}
