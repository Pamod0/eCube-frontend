import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { MatIconModule } from '@angular/material/icon';
import { FooterExtendedComponent } from "../../layout/footer-extended/footer-extended.component";
import { BreadcrumbComponent } from "../../layout/breadcrumb/breadcrumb.component";

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
    imports: [HeaderComponent, MatIconModule, FooterExtendedComponent, BreadcrumbComponent],
    templateUrl: './careers.component.html',
    styleUrl: './careers.component.scss'
})
export class CareersComponent {
    teamMembers: TeamMember[];
    vacancies: Vacency[];

    ngOnInit() {
        this.teamMembers = [
            {
                image: '/assets/images/careers/divya.png',
                name: 'Divya Perera',
                position: 'Head of Digital'
            },
            {
                image: '/assets/images/careers/malith.png',
                name: 'Malith Weeramuni',
                position: 'Senior UI/UX Design Engineer'
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
            },
            {
                image: '/assets/images/careers/asma.png',
                name: 'Asma Kharposh',
                position: 'Content Writer'
            },
            {
                image: '/assets/images/careers/sarujan.png',
                name: 'Suthagar Sarujan',
                position: 'Trainee Software Engineer'
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
