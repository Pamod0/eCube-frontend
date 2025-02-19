import { Component } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormControl, FormGroup, FormGroupDirective, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

import { MatIconModule } from '@angular/material/icon';
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
        MatIconModule
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

    constructor(private emailService: EmailService) {}

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

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    matcher = new MyErrorStateMatcher();
}
