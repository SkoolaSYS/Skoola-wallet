import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FpxService {
  private readonly bankIdUrl = 'https://www.komeps-fpx.com/call_bank.asp';

  constructor(private http: HttpClient) {}

  getBankId(): Observable<string> {
    return this.http.get(this.bankIdUrl, { responseType: 'text' });
  }

}
