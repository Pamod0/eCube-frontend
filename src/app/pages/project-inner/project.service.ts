import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProjectService {
    private _url: string = 'assets/data/projects.json';

    constructor(private http: HttpClient) {}

    getProjects(): Observable<any> {
        return this.http.get<any>(this._url);
    }
}
