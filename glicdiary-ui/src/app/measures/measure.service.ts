import { AuthService } from '../security/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Measure } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class MeasureService {

  measuresUrl = 'http://localhost:8080/activities';
  email: any;

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  list(): Promise<any> {
    return this.http.get(`${this.measuresUrl}`)
      .toPromise()
      .then(response => {
        return response;
      })
  }

  listByUser(): Promise<any> {
    this.email = this.auth.jwtPayload?.user_name;
    return this.http.get(`${this.measuresUrl}/user/${this.email}`)
      .toPromise()
      .then(response => {
        return response;
      });
  }

  add(Measure: Measure): Promise<Measure> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.measuresUrl, Measure.toJson(Measure), { headers })
      .toPromise();
  }
}
