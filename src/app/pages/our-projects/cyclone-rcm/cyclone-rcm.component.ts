import { Component } from '@angular/core';
import { HeaderComponent } from '../../../layout/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from '../../../layout/accordion/accordion.component';
import { ContactFormComponent } from '../../../layout/contact-form/contact-form.component';
import { FooterComponent } from '../../../layout/footer/footer.component';

interface TeamMember {
    image: string;
    name: string;
    position: string;
}

@Component({
    selector: 'app-cyclone-rcm',
    imports: [HeaderComponent, MatIconModule, AccordionComponent, ContactFormComponent, FooterComponent],
    templateUrl: './cyclone-rcm.component.html',
    styleUrl: './cyclone-rcm.component.scss'
})
export class CycloneRCMComponent {
    teamMembers: TeamMember[];

    ngOnInit() {
        this.teamMembers = [
            {
                image: '/assets/images/careers/team-2.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
            },
            {
                image: '/assets/images/careers/team-1.png',
                name: 'Divya Perera',
                position: 'Head of Digital'
            },

            {
                image: '/assets/images/careers/team-3.png',
                name: 'Pamod Peiris',
                position: 'Software Engineer'
            },
            {
                image: '/assets/images/careers/team-4.png',
                name: 'Keheliya Manathunga',
                position: 'Frontend Engineer'
            }
        ];
    }
}
