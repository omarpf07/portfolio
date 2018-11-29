import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }


  contactMe(name: string, lastName: string, message: string): Observable<any> {
    const formData = new FormData;
    return this.http.post(`${environment.BASE_URL}/sendMail`, JSON.stringify(formData), this.getHeaders())
      .pipe(map(this.extractData));

  }


  private extractData(res) {
    const body = res;
    return body;
  }

  private getHeaders() {
    return { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
}
}
