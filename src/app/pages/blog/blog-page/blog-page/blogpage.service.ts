import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogpageService {
  [x: string]: any;
  private _url: string = 'assets/data/blogpage.json';


  constructor(private http: HttpClient) {}

  getBlogPages(): Observable<any> {
      return this.http.get<any>(this._url);
  }
}






