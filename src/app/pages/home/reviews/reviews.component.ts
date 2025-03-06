import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { TestimonialComponent } from "../testimonial/testimonial.component";

@Component({
  selector: 'app-reviews',
  imports: [MatIconModule, TestimonialComponent],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss'
})
export class ReviewsComponent {

}
