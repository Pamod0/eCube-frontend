import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { JobApplicationFormComponent } from "./job-application-form/job-application-form.component";

@Component({
  selector: 'app-job-vacancy',
  imports: [RouterLink, MatIconModule, JobApplicationFormComponent],
  templateUrl: './job-vacancy.component.html',
  styleUrl: './job-vacancy.component.scss',
})
export class JobVacancyComponent {
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scrolling to the top
  }
}
