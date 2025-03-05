import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmailService {
    private apiUrl = 'https://ecube-c3eehhhqfjgtcqge.canadacentral-01.azurewebsites.net/api/email/send';

    constructor(private http: HttpClient) {}

    sendEmail(data: any): Observable<any> {
        return this.http.post(this.apiUrl, data);
    }
}
