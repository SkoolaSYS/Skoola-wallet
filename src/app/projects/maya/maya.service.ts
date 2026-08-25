import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MayaService {

  public regData: any = {};
  public signupData: any = {};

  private schoolApi = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) {}

  checkSchoolParentByEmail(email: string): Observable<any> {
    return this.http.get<any>(
      `${this.schoolApi}/ewallet/parent-by-email?email=${encodeURIComponent(email)}`
    );
  }
}