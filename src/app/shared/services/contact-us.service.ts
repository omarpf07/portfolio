import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private http: HttpClient) { }


  contactMe(data: any): Observable<any> {
    console.log(data);
    return this.http.post(`${environment.BASE_URL}/sendMail`, data, this.getHeaders())
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
