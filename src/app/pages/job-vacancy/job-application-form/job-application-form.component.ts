import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  ReactiveFormsModule, 
  FormBuilder, 
  Validators, 
  FormGroup 
} from '@angular/forms';

// Angular Material Imports
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

// Services
import { JobFormService } from '../../../services/job-form.service';

// Interfaces
import { JobApplicationFormData } from '../../../services/job-form.service';

@Component({
  selector: 'app-job-application-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    MatProgressSpinnerModule
  ],
  templateUrl: './job-application-form.component.html',
  styleUrl: './job-application-form.component.scss'
})
export class JobApplicationFormComponent {
  private _fb = inject(FormBuilder);
  private _jobFormService = inject(JobFormService);
  private _snackBar = inject(MatSnackBar);

  // Form definition
  form: FormGroup = this._fb.group({
    firstName: ['', [
      Validators.required, 
      Validators.minLength(2),
      Validators.maxLength(50)
    ]],
    lastName: ['', [
      Validators.required, 
      Validators.minLength(2),
      Validators.maxLength(50)
    ]],
    email: ['', [
      Validators.required, 
      Validators.email
    ]],
    phone: ['', [
      Validators.required, 
      Validators.pattern(/^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im)
    ]],
    linkedIn: ['', [
      Validators.pattern(/^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/)
    ]],
    salary: ['', [
      Validators.required, 
      Validators.min(0),
      Validators.max(1000000)
    ]],
    howDidFind: ['', Validators.required],
    noticePeriod: ['', Validators.required]
  });

  // Submission state
  isSubmitting = false;

  // Getter for easy access to form controls in template
  get f() {
    return this.form.controls;
  }

  // Submission method
  onSubmit() {
    if (this.form.invalid) {
      this.markFormGroupTouched(this.form);
      return;
    }

    this.isSubmitting = true;

    this._jobFormService.submitForm(this.form.value as JobApplicationFormData)
      .subscribe({
        next: () => {
          this._snackBar.open('Application submitted successfully', 'Close', { 
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.form.reset();
        },
        error: (err) => {
          this._snackBar.open('Failed to submit application', 'Close', { 
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
            panelClass: ['error-snackbar']
          });
          console.error('Submission error:', err);
        },
        complete: () => {
          this.isSubmitting = false;
        }
      });
  }

  // Helper method to mark all form controls as touched
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }
}