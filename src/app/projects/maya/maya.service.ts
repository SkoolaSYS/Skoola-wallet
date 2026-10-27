import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MayaService {

  public regData: any = {};
  public signupData: any = {};

  private schoolApi = 'https://skowla.com/api';

  private cbsWalletApi = 'http://localhost:5001';

  constructor(private http: HttpClient) {}

  checkSchoolParentByEmail(email: string): Observable<any> {
    return this.http.get<any>(
      `${this.schoolApi}/ewallet/parent-by-email?email=${encodeURIComponent(email)}`
    );
  }

  loginCbs(username: string, password: string): Observable<any> {

    const body: any = {
      password: password
    };

    if (username.indexOf('@') !== -1) {
      body.email = username;
    } else {
      body.userCode = username;
    }

    return this.http.post<any>(
      `${this.cbsWalletApi}/cbs-login`,
      body
    );
  }

  getCbsDependents(): Observable<any> {

  const token = localStorage.getItem('cbsAccessToken');

  return this.http.get<any>(
    `${this.cbsWalletApi}/cbs-dependents`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}


getCbsBalance(): Observable<any> {

  const token = localStorage.getItem('cbsAccessToken');

  return this.http.get(
    `${this.cbsWalletApi}/cbs-balance`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

getCbsMerchants(): Observable<any> {

  const token = localStorage.getItem('cbsAccessToken');

  return this.http.get(
    `${this.cbsWalletApi}/cbs-merchants`,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );
}

}