import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})

export class Services {
    public activetransaction: boolean;
    private $username: string;
    private $password: string;
    private authToken: string;
    public  forms: any = {};
    public  currentUser: Promise<any>;
    private storage: Storage = localStorage;
    private ACCESS_TOKEN = 'accessToken';
    public opsTagging: string;

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
        // console.log('username : ' + username + ', password : ' + password);
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
            // console.log(data);
            this.storeSession({accessToken: authorizationData});
            this.currentUser = of(data).toPromise();
            this.authToken = authorizationData;
        },
        (err) => {
            // console.log('login() Error...');
            alert("Login failed. " + err.status);
            console.log("Login failed. " + err.name);
        }));
    }
    public logout(): void {
        this.authToken = null;
        this.storage.clear();
        this.$username = null;
        this.$password = null;
    }
    public getAccountBalance(){
        // console.log('this.token -> ' + this.token.toString());
        // console.log('Service.getAccountBalance()');
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        // return this.http.get('/rest/accounts/info', this.headerOptions);
        return this.http.get('/rest/accounts/info', headerOptions).pipe(tap (data => {
            // console.log('Service.getAccountBalance(). OK');
            console.log(data);
        },
        (err) => {
            console.log('getAccountBalance() Error...');
            console.log(err);
        }));
    }

    public getAccountTransactionList(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        // return this.http.get('/rest/accounts/default/history', this.headerOptions);
        return this.http.get('/rest/accounts/default/history', headerOptions);
    }

    public getProfileData(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        // return this.http.get('rest/members/me', this.headerOptions);
        return this.http.get('rest/members/me', headerOptions);
    }

    public getTransferTypes(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        // return this.http.get('/rest/transferTypes', this.headerOptions);
        return this.http.get('/rest/transferTypes', headerOptions);
    }

    public getMemberList(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        // return this.http.get('rest/members', this.headerOptions);
        return this.http.get('rest/members', headerOptions);
    }
    public paymentTransfer(data: any){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        // return this.http.post('/rest/payments/confirmMemberPayment', data , this.headerOptions);
        return this.http.post('/rest/payments/confirmMemberPayment', data , headerOptions);
        //return this.http.post('/rest/payments/memberPayment', data , headerOptions);
    }
}
