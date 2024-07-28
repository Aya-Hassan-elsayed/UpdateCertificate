import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NotepadLaraService {
  private FileUploadUrl = 'http://10.100.102.50:5031/api/NotPaid/Print_NotPaid';


  constructor(private http: HttpClient) {}
  uploadFile(file: File, token: string) {
    const formData = new FormData();
    formData.append('file', file);

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.post(this.FileUploadUrl, formData, { headers, responseType: 'text' });
  }
}
