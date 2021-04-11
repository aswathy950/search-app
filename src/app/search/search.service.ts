import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable()
export class SearchService {
  constructor(private http: HttpClient) {}

  getComments(searchQuery: any): Observable<any> {
    const apiUrl = `${environment.apiUrl}/comments?q=${searchQuery}`;
    return this.http.get(apiUrl);
  }
}
