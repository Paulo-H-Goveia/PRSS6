import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from '../security/auth.service';
import { Measure } from '../core/model';

@Injectable({
  providedIn: 'root'
})
export class MeasuresService {

  measuresUrl = 'http://localhost:8080/measures';

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

  add(measure: Measure): Promise<Measure> {
    const headers = new HttpHeaders()
      .append('Content-Type', 'application/json');

    return this.http.post<any>(this.measuresUrl, Measure.toJson(measure), { headers })
      .toPromise();
  }

  remove(id: number): Promise<any> {
    return this.http.delete(`${this.measuresUrl}/${id}`)
      .toPromise()
      .then(() => null);
  }
}
