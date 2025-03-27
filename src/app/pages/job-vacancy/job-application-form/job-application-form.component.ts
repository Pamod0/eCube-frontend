import { Component, inject } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { MessageService } from 'primeng/api';
import { FileUpload } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { JobFormService } from '../../../services/job-form.service';
import { MatSnackBar } from '@angular/material/snack-bar';

interface UploadEvent {
  originalEvent: Event;
  files: File[];
}

@Component({
  selector: 'app-job-application-form',
  imports: [
    FileUploadModule,
    FileUpload,
    ToastModule,
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './job-application-form.component.html',
  styleUrl: './job-application-form.component.scss',
  providers: [MessageService],
})
export class JobApplicationFormComponent {
  isSubmitting: boolean;
  successMessage: string | null;
  errorMessage: string | null;
  hideRequiredMarker = true;

  uploadedFiles: any[] = [];

  form = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    linkedIn: new FormControl('', [Validators.required]),
    salary: new FormControl('', [Validators.required]),
    howDidFind: new FormControl('', [Validators.required]),
    noticePeriod: new FormControl('', [Validators.required]),
  });

  private messageService = inject(MessageService);
  private formService = inject(JobFormService);
  private _snackBar = inject(MatSnackBar);

  submitForm() {
    if (this.form.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.successMessage = null;
    this.errorMessage = null;

    this.formService.submitForm(this.form.value).subscribe({
      next: () => {
        this.successMessage = 'Your message has been sent!';
        this.form.reset();
        Object.keys(this.form.controls).forEach((key) => {
          this.form.get(key)?.setErrors(null);
        });
        this.openSnackBar('Submitted Successfully', 'Ok');
      },
      error: (err) => {
        this.errorMessage = 'Failed to send message. Please try again.';
        console.error(err);
      },
      complete: () => {
        this.isSubmitting = false;
      },
    });
  }

  onUpload(event: UploadEvent) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({ severity: 'info', summary: 'File Uploaded', detail: '' });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
}
