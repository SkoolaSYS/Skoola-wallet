import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgPopupsModule, NgPopupsService } from 'ng-popups';

@Injectable({
  providedIn: 'root',
})

export class Services {
    public activetransaction: boolean;
    private $username: string;
    private $password: string;
    private authToken: string;
    private $newusername: string;
    private $newpassword: string;
    private $confirmnewusername: string;    
    private $confirmnewpassword: string;
    public  forms: any = {};
    public  currentUser: Promise<any>;
    private storage: Storage = localStorage;
    private ACCESS_TOKEN = 'accessToken';
    private $forceChangePassword: boolean;
    public opsTagging: string;

    headerOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
            Authorization: this.token
        })
    };

    constructor(private http: HttpClient, private router: Router, private ngPopups: NgPopupsService){
        if (this.isLoggedIn()){
            this.currentUser = this.getProfileData().toPromise();
        }
     }

    public set username(username: string) { this.$username = username; }
    public get username(){ return this.$username; }

    public set password(password: string) { this.$password = password; }
    public get password(){ return this.$password; }

    public set newusername(newusername: string) { this.$newusername = newusername; }
    public get newusername(){ return this.$newusername; }

    public set confirmnewusername(confirmnewusername: string) { this.$confirmnewusername = confirmnewusername; }
    public get confirmnewusername(){ return this.$confirmnewusername; }

    public set newpassword(newpassword: string) { this.$newpassword = newpassword; }
    public get newpassword(){ return this.$newpassword; }

    public set confirmnewpassword(confirmnewpassword: string) { this.$confirmnewpassword = confirmnewpassword; }
    public get confirmnewpassword(){ return this.$confirmnewpassword; }

    public get forceChangePassword(): boolean { return this.$forceChangePassword; }
    public set forceChangePassword(value: boolean) { this.$forceChangePassword = value; }

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
            // console.log(data);
            this.storeSession({accessToken: authorizationData});
            this.currentUser = of(data).toPromise();
            this.authToken = authorizationData;
            this.forceChangePassword = data.forceChangePassword;
        },
        (err) => {
            console.log(err);
            this.ngPopups.alert(err.error.errorCode + '!\n ' + err.error.errorDetails);
			this.username='';
			this.password='';
			this.router.navigate(['login']);
        }));
    }
    public logout(): void {
        this.authToken = null;
        this.storage.clear();
        this.$username = null;
        this.$password = null;
    }
    public getAccountBalance(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        return this.http.get('/rest/accounts/info', headerOptions).pipe(tap (data => {
            // console.log(data);
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
        return this.http.get('/rest/accounts/default/history', headerOptions).pipe(tap (data => {
            // console.log(data);
        },
        (err) => {
            console.log('getTransactionHistory() Error...');
            console.log(err);
        }));;
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
        return this.http.get('rest/members/me', headerOptions).pipe(tap (data => {
            // console.log(data);
        },
        (err) => {
            console.log('getProfileData() Error...');
            console.log(err);
        }));;
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
        return this.http.get('/rest/transferTypes', headerOptions).pipe(tap (data => {
            // console.log(data);
        },
        (err) => {
            console.log('getTransferType() Error...');
            console.log(err);
        }));;
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
        return this.http.get('rest/members', headerOptions).pipe(tap (data => {
            // console.log(data);
        },
        (err) => {
            console.log('getMemberListing() Error...');
            console.log(err);
        }));;
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
        console.log('paymentTransfer data : ' + data.toMemberId);
        return this.http.post('/rest/payments/confirmMemberPayment', data , headerOptions).pipe(tap (data => {            
            console.log(data);
        },
        (err) => {
            console.log('MemberPerformPayment() Error : ' + err);
        }));;
    }

    public changeMemberProfilePassword(data: any){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        return this.http.post('/rest/members/changeMemberProfilePassword', data , headerOptions).pipe(tap (data => {
            // console.log(data);
        },
        (err) => {
            console.log('changeMemberProfilePassword() Error...');
            console.log(err);
        }));;
    }
}
