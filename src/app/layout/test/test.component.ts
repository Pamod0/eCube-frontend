import { Component } from '@angular/core';

@Component({
    selector: 'app-test',
    imports: [],
    templateUrl: './test.component.html',
    styleUrl: './test.component.scss'
})
export class TestComponent {
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
