import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class Services {
    authorizationData = 'Basic ' + btoa('rosli' + ':' + 'rosli');
    headerOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            Authorization: this.authorizationData
        })
    };
    constructor(private http: HttpClient){

    }

    public getAccountBalance(){
        return this.http.get('/rest/accounts/info', this.headerOptions);
    }

    public getAccountTransactionList(){
        return this.http.get('/rest/accounts/default/history', this.headerOptions)
    }

    public getProfileData(){
        return this.http.get('rest/members/me', this.headerOptions)
    }

    public getTransferTypes(){
        return this.http.get('/rest/transferTypes', this.headerOptions)
    }
}
