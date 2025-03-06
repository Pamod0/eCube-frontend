import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-our-projects',
    imports: [RouterLink, MatIconModule],
    templateUrl: './our-projects.component.html',
    styleUrl: './our-projects.component.scss'
})
export class OurProjectsComponent {
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to the top
    }
}
