import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KopenService {

  private API = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getItems(): Observable<any> {
    return this.http.get(`${this.API}/items`);
  }

  createOrder(order: any): Observable<any> {
    return this.http.post(`${this.API}/orders`, order);
  }

  requestItem(data: any): Observable<any> {
    return this.http.post(`${this.API}/request-item`, data);
  }
}