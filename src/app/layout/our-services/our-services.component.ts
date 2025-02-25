import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-our-services',
    imports: [RouterModule, MatIconModule],
    templateUrl: './our-services.component.html',
    styleUrl: './our-services.component.scss'
})
export class OurServicesComponent {
    scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to the top
    }
}
