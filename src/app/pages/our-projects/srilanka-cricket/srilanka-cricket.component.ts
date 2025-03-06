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
    selector: 'app-srilanka-cricket',
    imports: [HeaderComponent, MatIconModule, AccordionComponent, ContactFormComponent, FooterComponent],
    templateUrl: './srilanka-cricket.component.html',
    styleUrl: './srilanka-cricket.component.scss'
})
export class SrilankaCricketComponent {
    teamMembers: TeamMember[];

    ngOnInit() {
        this.teamMembers = [
            {
                image: '/assets/images/careers/malith.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
            },
            {
                image: '/assets/images/careers/divya.png',
                name: 'Divya Perera',
                position: 'Head of Digital'
            },

            {
                image: '/assets/images/careers/pamod.png',
                name: 'Pamod Peiris',
                position: 'Software Engineer'
            },
            {
                image: '/assets/images/careers/keheliya.png',
                name: 'Keheliya Manathunga',
                position: 'Frontend Engineer'
            }
        ];
    }
}
