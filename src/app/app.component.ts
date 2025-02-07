import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { HeroComponent } from "./layout/hero/hero.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'eCube';
}
