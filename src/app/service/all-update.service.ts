import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AllUpdateService {
  private url = 'http://10.100.102.50:5031/api/Zezo/getlogdata';
  private token!:string;

  constructor(private http: HttpClient) {}


  getallUpdate(searchQuery: string ,token: string): Observable<any[]> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any[]>(`${this.url}?username=${searchQuery}`, { headers });
  }
}
