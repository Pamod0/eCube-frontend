import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterComponent } from '../../layout/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';

interface TeamMember {
    image: string;
    name: string;
    position: string;
}

interface Vacency {
    title: string;
    description: string;
    link?: string;
}

@Component({
    selector: 'app-careers',
    imports: [HeaderComponent, FooterComponent, MatIconModule],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.scss'
})
export class CareersComponent {
    teamMembers: TeamMember[];
    vacancies: Vacency[];

    ngOnInit() {
        this.teamMembers = [
            {
                image: '/assets/images/careers/team-1.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
            },
            {
                image: '/assets/images/careers/team-1.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
            },
            {
                image: '/assets/images/careers/team-1.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
            },
            {
                image: '/assets/images/careers/team-1.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
            },
            {
                image: '/assets/images/careers/team-1.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
            },
            {
                image: '/assets/images/careers/team-1.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
            }
        ];

        this.vacancies = [
            {
                title: 'Product Designer',
                description: 'We are looking for mid-level product designer to join our team.'
            },
            {
                title: 'Full-Stack Developer',
                description: 'We are looking for mid-level full-stack developer to join our team.'
            },
            {
                title: 'Account Executive',
                description: 'We are looking for mid-level product designer to join our team.'
            },
            {
                title: 'SEO Marketing Manager',
                description: 'We are looking for mid-level full-stack developer to join our team.'
            },
            {
                title: 'Senior UI/UX Design Engineer',
                description: 'We are looking for a Senior UI/UX Design Engineer to join our team.'
            },
            {
                title: 'Senior UI/UX Design Engineer',
                description: 'We are looking for a Senior UI/UX Design Engineer to join our team.'
            }
        ]
    }
}
