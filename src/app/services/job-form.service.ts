import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobFormService {
  private apiUrl =
    'https://ecube-c3eehhhqfjgtcqge.canadacentral-01.azurewebsites.net/api/email/send';

  private http = inject(HttpClient);

  submitForm(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }
}
