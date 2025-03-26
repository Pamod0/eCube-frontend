import { Component } from '@angular/core';
import { HeaderComponent } from '../../layout/header/header.component';
import { FooterExtendedComponent } from '../../layout/footer-extended/footer-extended.component';
import { BreadcrumbComponent } from '../../layout/breadcrumb/breadcrumb.component';

interface TeamMember {
  image: string;
  name: string;
  position: string;
}

@Component({
  selector: 'app-about-us',
  imports: [HeaderComponent, FooterExtendedComponent, BreadcrumbComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss',
})
export class AboutUsComponent {
  teamMembers: TeamMember[];

  ngOnInit() {
    this.teamMembers = [
      {
        image: '/assets/images/careers/divya.png',
        name: 'Divya Perera',
        position: 'Head of Digital',
      },
      {
        image: '/assets/images/careers/malith.png',
        name: 'Malith Weeramuni',
        position: 'Senior UI/UX Design Engineer',
      },
      {
        image: '/assets/images/careers/pamod.png',
        name: 'Pamod Peiris',
        position: 'Software Engineer',
      },
      {
        image: '/assets/images/careers/keheliya.png',
        name: 'Keheliya Manathunga',
        position: 'Frontend Engineer',
      },
      {
        image: '/assets/images/careers/aqeel.png',
        name: 'Aqeel Shafy',
        position: 'Associate UI/UX Designer',
      },
      {
        image: '/assets/images/careers/ravindu.png',
        name: 'Ravindu Fernando',
        position: 'Business Analyst',
      },
      {
        image: '/assets/images/careers/asma.png',
        name: 'Asma Kharposh',
        position: 'Content Writer',
      },
      {
        image: '/assets/images/careers/sarujan.png',
        name: 'Suthagar Sarujan',
        position: 'Trainee Software Engineer',
      },
      {
        image: '/assets/images/careers/yohan.png',
        name: 'Yohan Nanayakkara',
        position: 'Intern Software Engineer',
      },
      {
        image: '/assets/images/careers/chanindu.png',
        name: 'Chanidu Sandaruwan',
        position: 'Business Development Executive',
      },
    ];
  }
}
