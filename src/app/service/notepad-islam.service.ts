import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NotepadIslamService {
  private FileUploadUrl = 'http://10.100.102.50:5031/api/NotPaid/Shahn_NotPaid';


  constructor(private http: HttpClient) {}
  uploadFile(file: File, token: string) {
    const formData = new FormData();
    formData.append('file', file);

    // Create headers with Authorization
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Use responseType option to specify the expected response type
    return this.http.post(this.FileUploadUrl, formData, { headers, responseType: 'text' });
  }
}
