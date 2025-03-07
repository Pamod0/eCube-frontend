import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-about-us',
    imports: [RouterLink, MatIconModule],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to the top
    }
}
