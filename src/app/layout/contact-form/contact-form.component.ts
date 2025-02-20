import { Component, inject } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatProgressBarModule} from '@angular/material/progress-bar';

import { EmailService } from '../../services/email.service';
import { HttpClientModule } from '@angular/common/http';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}

@Component({
    selector: 'app-contact-form',
    imports: [
        ReactiveFormsModule,
        HttpClientModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatIconModule,
        MatProgressBarModule
    ],
    templateUrl: './contact-form.component.html',
    styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
    contactForm = new FormGroup({
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        phone: new FormControl(''),
        message: new FormControl('', [Validators.required])
    });

    isSubmitting = false;
    successMessage: string | null = null;
    errorMessage: string | null = null;

    private _snackBar = inject(MatSnackBar);
    private emailService = inject(EmailService);

    submitForm() {
        if (this.contactForm.invalid) {
            return;
        }

        this.isSubmitting = true;
        this.successMessage = null;
        this.errorMessage = null;

        this.emailService.sendEmail(this.contactForm.value).subscribe({
            next: () => {
                this.successMessage = 'Your message has been sent!';
                this.contactForm.reset();
                Object.keys(this.contactForm.controls).forEach((key) => {
                    this.contactForm.get(key)?.setErrors(null);
                });
                this.openSnackBar('Submitted Successfully', 'Ok')
            },
            error: (err) => {
                this.errorMessage = 'Failed to send message. Please try again.';
                console.error(err);
            },
            complete: () => {
                this.isSubmitting = false;
            }
        });
    }

    openSnackBar(message: string, action: string) {
        this._snackBar.open(message, action);
    }
}
