import { Component } from '@angular/core';
import { HeaderComponent } from "../../layout/header/header.component";
import { FooterExtendedComponent } from "../../layout/footer-extended/footer-extended.component";


interface TeamMember {
    image: string;
    name: string;
    position: string;
}


@Component({
    selector: 'app-about-us',
    imports: [HeaderComponent, FooterExtendedComponent],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
    teamMembers: TeamMember[];

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
            },
            {
                image: '/assets/images/careers/sarujan.png',
                name: 'Suthagar Sarujan',
                position: 'Trainee Software Engineer'
            },
            {
                image: '/assets/images/careers/sarujan.png',
                name: 'Suthagar Sarujan',
                position: 'Trainee Software Engineer'
            }
        ];
    }
}
