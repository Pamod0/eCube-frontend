import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {
    /* Open when someone clicks on the span element */
    openNav() {
        document.getElementById('myNav').style.width = '100%';
        // document.getElementById("myNav").style.height = "100%";
    }

    /* Close when someone clicks on the "x" symbol inside the overlay */
    closeNav() {
        document.getElementById('myNav').style.width = '0%';
    }
}
