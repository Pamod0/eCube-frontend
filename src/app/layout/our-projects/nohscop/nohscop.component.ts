import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { AccordionComponent } from "../../accordion/accordion.component";
import { ContactFormComponent } from "../../contact-form/contact-form.component";
import { FooterComponent } from "../../footer/footer.component";


interface TeamMember {
  image: string;
  name: string;
  position: string;
}


@Component({
  selector: 'app-nohscop',
  imports: [HeaderComponent, MatIconModule, AccordionComponent, ContactFormComponent, FooterComponent],
  templateUrl: './nohscop.component.html',
  styleUrl: './nohscop.component.scss'
})
export class NOHSCOPComponent {
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
