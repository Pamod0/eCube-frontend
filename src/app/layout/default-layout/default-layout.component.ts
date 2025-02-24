import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterExtendedComponent } from "../footer-extended/footer-extended.component";
import { HeaderComponent } from "../header/header.component";

@Component({
  selector: 'app-default-layout',
  imports: [RouterOutlet, FooterExtendedComponent, HeaderComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
