import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface JobApplicationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  linkedIn: string;
  salary: string;
  howDidFind: string;
  noticePeriod: string;
}

@Injectable({
  providedIn: 'root',
})
export class JobFormService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl + '/JobApplication/submit';

  submitForm(data: JobApplicationFormData): Observable<any> {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (value !== null && value !== undefined) {
        formData.append(key, value);
      }
    });

    return this.http.post(this.apiUrl, formData);
  }
}
