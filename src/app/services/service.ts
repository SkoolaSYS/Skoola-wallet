import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class Services {
    private $username: string;
    private $password: string;
    private storage: Storage = localStorage;
    private ACCESS_TOKEN = 'accessToken';
    headerOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            Authorization: this.token
        })
    };
    constructor(private http: HttpClient){ }

    public set username(username: string) { this.$username = username; }
    public get username(){ return this.$username; }

    public set password(password: string) { this.$password = password; }


    public get password(){ return this.$password; }

    storeSession({accessToken}: {
        accessToken?: string;
    }): void {
        if (accessToken) {
            this.storage.setItem(this.ACCESS_TOKEN, accessToken);
            this.headerOptions.headers = this.headerOptions.headers.set('Authorization', accessToken);
        }
    }
    public get token(): string {
        return this.storage.getItem(this.ACCESS_TOKEN);
    }
    isLoggedIn(): boolean {
        return !!this.token;
    }
    public login(username: string, password: string): Observable<any> {
        const authorizationData = 'Basic ' + btoa(username + ':' + password);
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: authorizationData
            })
        };
        return this.http.get('/rest/accounts/info', headerOptions).pipe(tap (data => {
            this.storeSession({accessToken: authorizationData});
        }));
    }
    public logout(): void {
        this.storage.clear();
    }
    public getAccountBalance(){
        return this.http.get('/rest/accounts/info', this.headerOptions);
    }

    public getAccountTransactionList(){
        return this.http.get('/rest/accounts/default/history', this.headerOptions);
    }

    public getProfileData(){
        return this.http.get('rest/members/me', this.headerOptions);
    }

    public getTransferTypes(){
        return this.http.get('/rest/transferTypes', this.headerOptions);
    }

    public getMemberList(){
        return this.http.get('rest/members', this.headerOptions);
    }
}
