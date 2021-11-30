import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';

@Injectable({
  providedIn: 'root',
})

export class Services {
    public activetransaction: boolean;
    public currentBalance;
    public topupBalance;
    private $username: string;
    private $password: string;
    private authToken: string;
    private $newusername: string;
    private $newpassword: string;
    private $confirmnewusername: string;    
    private $confirmnewpassword: string;
    public  amountTopup:string
    public  forms: any = {};
    public  bankForms: any = {};
    public  currentUser: Promise<any>;
    private storage: Storage = localStorage;
    private ACCESS_TOKEN = 'accessToken';
    private $forceChangePassword: boolean;
    private $forceChangeUsername: boolean;
    public opsTagging: string;
    private $allowWithdrawal: boolean;
    public  receiver: Promise<any>;
    public  transactionData: any = {};
    public  bankData:any={};
    public memberBankData:any={};
    public  userAccount: any;
    public transactionFeeAmount;
    public ipAddress:any;
    public sellGold:any;
    public sellGoldData:any;
    public buyGold:any;
    public chosenGold:any;
    public averageGold:any;
    public counter:number = 0;
    public memberId:string;
    public qrData:any;

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

    public get forceChangeUsername(): boolean { return this.$forceChangeUsername; }
    public set forceChangeUsername(value: boolean) { this.$forceChangeUsername = value; }

    public get allowWithdrawal(): boolean { return this.$allowWithdrawal; }
    public set allowWithdrawal(value: boolean) { this.$allowWithdrawal = value; }

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
            this.forceChangeUsername = data.forceChangeUsername;
            this.allowWithdrawal = data.allowWithdrawal;
        },
        (err) => {
            // console.log(err);
            this.ngPopups.alert(err.error.errorCode + '!\n ' + err.error.errorDetails);
			this.username='';
			this.password='';
			this.router.navigate(['login']);
        }));
    }

    public logout(): void {
        this.authToken = null;
        localStorage.removeItem("accessToken");
        this.counter = 0;
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
            this.currentUser = of(data).toPromise();
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
    public loadById(merchantId:string){
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        console.log('merchantId=6');
        return this.http.get( "/rest/members/"+merchantId, headerOptions).pipe(tap (data => {
            console.log(data);
            console.log("id");
        },
        (err) => {
            console.log('loadById() Error...');
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

    // For uploading user profile with image (rwa)
    public updateProfileWithImage(data: FormData) {
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.post('/rest/members/updateProfileWithImage', data , headerOptions).pipe(tap (data => {
            // console.log(data);
        },
        (err) => {
            console.log('uploadFile() Error...');
            console.log(err);
        }));;
    }

    public uploadVerificationData(data: FormData) {
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.post('/rest/members/uploadVerificationData', data , headerOptions).pipe(tap (data => {
            // console.log(data);
        },
        (err) => {
            console.log('uploadVerificationData() Error...');
            console.log(err);
        }));;
    }

    public getMemberByAccountNumber(accountNo: String) {
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.get('/rest/members/accNumber/'+accountNo, headerOptions).pipe(tap (data => {
            // console.log(data);
            this.receiver = of(data).toPromise();
        },
        (err) => {
            console.log('getMemberByAccountNumber() Error...');
            console.log(err);
        }));;
    }

    public getWalletPaymentData(accNumber: string, transactionTypeId: number): Observable<any> {
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            }),
            params: new HttpParams().set("toMemberAccNumber", accNumber).set("transactionTypeId", transactionTypeId.toString())
        };  

        return this.http.get('/rest/payments/walletPaymentData', headerOptions).pipe(tap (data => {
            // console.log(data);
            this.receiver = of(data.toMember).toPromise();
            this.transactionData.fee = data.transactionFee;
            this.transactionData.gold = data.goldAmount;
        },
        (err) => {
            console.log('getWalletPaymentData() Error...');
            console.log(err);
        }));;
    }
    public sendAddBank(data:any){
        console.log(data);
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.post('/rest/members/addBank',data, headerOptions).pipe(tap (data => {
             //console.log(data);
        },
        (err) => {
            console.log('sendAddBank() Error...');
            console.log(err);
        }));;
    }
    public sendAddBankLoad(data:any){
        console.log(data);
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.post('/rest/members/addBankLoad',data, headerOptions).pipe(tap (data => {
             //console.log(data);
        },
        (err) => {
            console.log('sendAddBank() Error...');
            console.log(err);
        }));;
    }
    public sendUpdateBankLoad(data:any){
        console.log(data);
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.post('/rest/members/updateBankLoad',data, headerOptions).pipe(tap (data => {
             //console.log(data);
        },
        (err) => {
            console.log('sendAddBank() Error...');
            console.log(err);
        }));;
    }
    public getBankData(bankCountry){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        return this.http.get('rest/accounts/banks/'+bankCountry, headerOptions).pipe(tap (data => {
            this.bankData = data;
        },
        (err) => {
            console.log('getBankData() Error...');
            console.log(err);
        }));;
    }

    public getMemberBankData(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        return this.http.get('rest/accounts/getMemberBankData', headerOptions).pipe(tap (data => {
            this.memberBankData = data;
        },
        (err) => {
            console.log('getBankDataMember() Error...');
            console.log(err);
        }));;
    }
    public getMemberBankLoadData(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        return this.http.get('rest/accounts/getMemberBankLoadData', headerOptions).pipe(tap (data => {
            this.memberBankData = data;
        },
        (err) => {
            console.log('getBankDataMember() Error...');
            console.log(err);
        }));;
    }
    public sendUpdateBank(data:any){
        console.log(data);
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.post('/rest/members/updateBank',data, headerOptions).pipe(tap (data => {
             //console.log(data);
        },
        (err) => {
            console.log('sendUpdateBank() Error...');
            console.log(err);
        }));;
    }
    public doWithdrawal(data: any){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        return this.http.post('/rest/payments/confirmWithdrawal', data , headerOptions).pipe(tap (data => {            
            //console.log(data);
        },
        (err) => {
            console.log('MemberPerformPayment() Error : ' + err);
        }));;
    }
    public getTransactionFeeAmount(transactionTypeId){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        return this.http.get('rest/accounts/getTransactionFeeAmount/'+transactionTypeId, headerOptions).pipe(tap (data => {
            this.transactionFeeAmount = data;
        },
        (err) => {
            console.log('getTransactionFeeAmount() Error...');
            console.log(err);
        }));;
    }

    public signupUser(data: any){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization'
            })
        };
        console.log(data);
        return this.http.post('/rest/public/signupUser', data , headerOptions).pipe(tap (data => {            
            console.log(data);
            
        },
        (err) => {
            console.log('signupUser() Error...');
            console.log(err);

        }));;
    }

    public requestCard(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        return this.http.get('/rest/members/requestPhysicalCard',headerOptions).pipe(tap (data => {            
            //console.log(data);
            
        },
        (err) => {
            console.log('requestCard() Error...');
            console.log(err);

        }));;
    }

    //calculate-average-gold
    public calAvgGold(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.get('/rest/members/calAvgGold',headerOptions).pipe(tap (res => {
            //console.log(res);
             this.averageGold = res;
        },
        (err) => {
            console.log('calAvgGold() Error...');
            console.log(err);
        }));;
    }

    //sell-gold-components
    public sellGoldComponent(data:any){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            }),
            params: new HttpParams().set("goldAmount", data.goldAmount).set("goldPrice", data.goldPrice).set("goldReference",data.goldReference)
        };  
        return this.http.get('/rest/members/sellGoldComponent',headerOptions).pipe(tap (res => {
             this.sellGold = res;
        },
        (err) => {
            console.log('sellGoldComponent() Error...');
            console.log(err);
        }));;
    }

    //sell-gold-details 
    public sellGoldDetails(data:any){
       // console.log(data);
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            }),
        };  
        return this.http.post('rest/members/sellGoldDetails',data, headerOptions).pipe(tap (data => {
             //console.log(data);
        },
        (err) => {
            console.log('sellGoldDetails() Error...');
            console.log(err);
        }));;
    }

    public getSellGoldData(order){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        return this.http.get('rest/members/getSellGoldData/'+order, headerOptions).pipe(tap (data => {
            this.sellGoldData = data;
        },
        (err) => {
            console.log('getSellGoldData() Error...');
            console.log(err);
        }));;
    }

        //buy-gold-components
        public buyGoldComponent(data:any){
            const headerOptions = {
                headers: new HttpHeaders({
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    Authorization: this.token
                }),
                params: new HttpParams().set("goldReference", data.goldReference).set("goldAmount", data.goldAmount).set("goldPrice", data.goldPrice).set("goldId", data.goldId)
            };  
            return this.http.get('/rest/members/buyGoldComponent',headerOptions).pipe(tap (res => {
                 this.buyGold = res;
            },
            (err) => {
                console.log('buyGoldComponent() Error...');
                console.log(err);
            }));;
        }

    //buy-gold-details 
    public buyGoldDetails(data:any){
        //console.log(data);
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            }),
        };  
        return this.http.post('rest/members/buyGoldDetails',data, headerOptions).pipe(tap (data => {
             //console.log(data);
        },
        (err) => {
            console.log('buyGoldDetails() Error...');
            console.log(err);
        }));;
    }

    public getGoldData(value: String) {
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.get('/rest/members/goldData/'+value, headerOptions).pipe(tap (data => {
            // console.log(data);
            this.receiver = of(data).toPromise();
        },
        (err) => {
            console.log('getGoldData() Error...');
            console.log(err);
        }));;
    }

    public getBankLoadData() {
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  

        return this.http.get('/rest/payments/bankLoadData', headerOptions).pipe(tap (data => {
            // console.log(data);
        },
        (err) => {
            console.log(err);
        }));;
    }
    public topupAtMerchant(data:any) {
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  

        return this.http.post('/rest/payments/topupAtMerchant', data,headerOptions).pipe(tap (data => {
            // console.log(data);
        },
        (err) => {
            console.log(err);
        }));;
    }

    public getBotAuthorization(){
        const headerOptions = {
            headers: new HttpHeaders({
                'Content-Type':  'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };
        
        return this.http.get('/rest/access/bot', headerOptions).toPromise();
    }

    public decrypt(data:any){
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  

        return this.http.post('/rest/members/decryptText', data,headerOptions).pipe(tap (data => {
            //console.log(data);
            this.qrData = data
        },
        (err) => {
            console.log(err);
        }));;
    }

}
