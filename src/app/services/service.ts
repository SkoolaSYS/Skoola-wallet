import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class Services {
    private $username: string;
    private $password: string;
    public  forms: any = {};
    public  currentUser: Promise<any>;
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
    constructor(private http: HttpClient){
        if (this.isLoggedIn()){
            this.currentUser = this.getProfileData().toPromise();
        }
     }

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
        return this.http.get('/rest/members/me', headerOptions).pipe(tap (data => {
            this.storeSession({accessToken: authorizationData});
            this.currentUser = of(data).toPromise();
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
    public paymentTransfer(data: any){
        return this.http.post('/rest/payments/confirmMemberPayment', data , this.headerOptions);
    }
}
