import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogPage } from './blogpage.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogpageService {
  private dataUrl = '/assets/data/blogpage.json';

  constructor(private http: HttpClient) {}

  getBlogPages(): Observable<BlogPage[]> {
    return this.http.get<BlogPage[]>(this.dataUrl);
  }
}
