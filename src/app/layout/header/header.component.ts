import { Component, ElementRef, inject, Inject, ViewChild } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule, ViewportScroller } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  faCaretDown = faCaretDown;
  isDropdownOpen = false;

  private router = inject(Router);

  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    // if (element) {
    //   element.scrollIntoView({ behavior: 'smooth' });
    // }
    this.router.navigate(['/'], { fragment: elementId });
  }
  /* Open when someone clicks on the span element */
  openNav() {
    document.getElementById('myNav').style.width = '100%';
    // document.getElementById("myNav").style.height = "100%";
  }

  /* Close when someone clicks on the "x" symbol inside the overlay */
  closeNav() {
    document.getElementById('myNav').style.width = '0%';
  }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
