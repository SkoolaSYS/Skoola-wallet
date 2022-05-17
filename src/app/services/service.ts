import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Utility } from 'src/utils';

@Injectable({
  providedIn: 'root',
})

export class Services {
    public  activetransaction: boolean;
    public  currentBalance;
    public  topupBalance;
    private $username: string;
    private $password: string;
    private authToken: string;
    private $newusername: string;
    private $newpassword: string;
    private $confirmnewusername: string;    
    private $confirmnewpassword: string;
    public  amountTopup:string
    public  amountRecycle:string;
    public  recycleWeight: string;
    public  recycleWaste: string;
    public  forms: any = {};
    public  bankForms: any = {};
    public  currentUser: Promise<any>;
    private storage: Storage = localStorage;
    private ACCESS_TOKEN = 'accessToken';
    private $forceChangePassword: boolean;
    private $forceChangeUsername: boolean;
    public  opsTagging: string;
    private $allowWithdrawal: boolean;
    public  receiver: Promise<any>;
    public  transactionData: any = {};
    public  bankData:any={};
    public  memberBankData:any={};
    public  userAccount: any;
    public  transactionFeeAmount;
    public  ipAddress:any;
    public  sellGold:any;
    public  sellGoldData:any;
    public  buyGold:any;
    public  chosenGold:any;
    public  averageGold:any;
    public  counter:number = 0;
    public  memberId:string;
    public  qrData:any;
    public  redeemGold: any;
    public  qrgenerate: boolean;
    public  redeemQr: Object;
    public  redeemDetail: any;
    public  pledgeGold: any;
    public  pledgeList: Object;
    public  idPledge: any;
    public  recycle:boolean

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
            this.storeSession({accessToken: authorizationData});
            this.currentUser = of(data).toPromise();
            this.authToken = authorizationData;
            this.forceChangePassword = data.forceChangePassword;
            this.forceChangeUsername = data.forceChangeUsername;
            this.allowWithdrawal = data.allowWithdrawal;
        },
        (err) => {
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
            
        },
        (err) => {
            Utility.log('getAccountBalance() Error...');
            Utility.log(err);
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

        },
        (err) => {
            Utility.log('getTransactionHistory() Error...');
            Utility.log(err);
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
            this.currentUser = of(data).toPromise();
        },
        (err) => {
            Utility.log('getProfileData() Error...');
            Utility.log(err);
        }));;
    }

    public getTransferTypes(){
        return this.http.get('/rest/transferTypes', this.headerOptions).pipe(tap (data => {
            
        },
        (err) => {
            Utility.log('getTransferType() Error...');
            Utility.log(err);
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
           
        },
        (err) => {
            Utility.log('getMemberListing() Error...');
            Utility.log(err);
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

        return this.http.get( "/rest/members/"+merchantId, headerOptions).pipe(tap (data => {
         
        },
        (err) => {
            Utility.log('loadById() Error...');
            Utility.log(err);
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
        Utility.log('paymentTransfer data : ' + data.toMemberId);
        return this.http.post('/rest/payments/confirmMemberPayment', data , headerOptions).pipe(tap (data => {            
            
        },
        (err) => {
            Utility.log('MemberPerformPayment() Error : ' + err);
        }));;
    }

    public changeMemberProfilePassword(data: any){
        return this.http.post('/rest/members/changeMemberProfilePassword', data , this.headerOptions).pipe(tap (data => {
           
        },
        (err) => {
            Utility.log('changeMemberProfilePassword() Error...');
            Utility.log(err);
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
            
        },
        (err) => {
            Utility.log('updateProfileWithImage() Error...');
            Utility.log(err);
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
            
        },
        (err) => {
            Utility.log('uploadVerificationData() Error...');
            Utility.log(err);
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
           
            this.receiver = of(data).toPromise();
        },
        (err) => {
            Utility.log('getMemberByAccountNumber() Error...');
            Utility.log(err);
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
            
            this.receiver = of(data.toMember).toPromise();
            this.transactionData.fee = data.transactionFee;
            this.transactionData.gold = data.goldAmount;
        },
        (err) => {
            Utility.log('getWalletPaymentData() Error...');
            Utility.log(err);
        }));;
    }
    public sendAddBank(data:any){ 
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.post('/rest/members/addBank',data, headerOptions).pipe(tap (data => {
            
        },
        (err) => {
            Utility.log('sendAddBank() Error...');
            Utility.log(err);
        }));;
    }
    public sendAddBankLoad(data:any){
        return this.http.post('/rest/members/addBankLoad',data, this.headerOptions).pipe(tap (data => {
            
        },
        (err) => {
            Utility.log('sendAddBankLoad() Error...');
            Utility.log(err);
        }));;
    }
    public sendUpdateBankLoad(data:any){
        return this.http.post('/rest/members/updateBankLoad',data, this.headerOptions).pipe(tap (data => {
             
        },
        (err) => {
            Utility.log('sendAddBank() Error...');
            Utility.log(err);
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
            Utility.log('getBankData() Error...');
            Utility.log(err);
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
            Utility.log('getMemberBankData() Error...');
            Utility.log(err);
        }));;
    }
    public getMemberBankLoadData(){
        return this.http.get('rest/accounts/getMemberBankLoadData', this.headerOptions).pipe(tap (data => {
            this.memberBankData = data;
        },
        (err) => {
            Utility.log('getMemberBankLoadData() Error...');
            Utility.log(err);
        }));;
    }
    public sendUpdateBank(data:any){
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.post('/rest/members/updateBank',data, headerOptions).pipe(tap (data => {
            
        },
        (err) => {
            Utility.log('sendUpdateBank() Error...');
            Utility.log(err);
        }));;
    }
    public doWithdrawal(data: any){
        return this.http.post('/rest/payments/confirmWithdrawal', data , this.headerOptions).pipe(tap (data => {            
            
        },
        (err) => {
            Utility.log('MemberPerformPayment() Error : ' + err);
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
            Utility.log('getTransactionFeeAmount() Error...');
            Utility.log(err);
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
        Utility.log(data);
        return this.http.post('/rest/public/signupUser', data , headerOptions).pipe(tap (data => {            
            
        },
        (err) => {
            Utility.log('signupUser() Error...');
            Utility.log(err);

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
        return this.http.get('/rest/members/requestPhysicalCard', headerOptions).pipe(tap (data => {            
           
        },
        (err) => {
            Utility.log('requestCard() Error...');
            Utility.log(err);

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

        return this.http.get('/rest/members/calAvgGold', headerOptions).pipe(tap (res => {
             this.averageGold = res;
        },
        (err) => {
            Utility.log('calAvgGold() Error...');
            Utility.log(err);
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
            Utility.log('sellGoldComponent() Error...');
            Utility.log(err);
        }));;
    }

    //sell-gold-details 
    public sellGoldDetails(data:any){
        return this.http.post('rest/members/sellGoldDetails',data, this.headerOptions).pipe(tap (data => {
             
        },
        (err) => {
            Utility.log('sellGoldDetails() Error...');
            Utility.log(err);
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
            Utility.log('getSellGoldData() Error...');
            Utility.log(err);
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
                Utility.log('buyGoldComponent() Error...');
                Utility.log(err);
            }));;
        }

    //buy-gold-details 
    public buyGoldDetails(data:any){
        return this.http.post('rest/members/buyGoldDetails',data, this.headerOptions).pipe(tap (data => {
            
        },
        (err) => {
            Utility.log('buyGoldDetails() Error...');
            Utility.log(err);
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
            this.receiver = of(data).toPromise();
        },
        (err) => {
            Utility.log('getGoldData() Error...');
            Utility.log(err);
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
    
        },
        (err) => {
            Utility.log(err);
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
        return this.http.post('/rest/payments/topupAtMerchant', data, headerOptions).pipe(tap (data => {
            
        },
        (err) => {
            Utility.log(err);
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
        return this.http.post('/rest/members/decryptText', data, headerOptions).pipe(tap (data => {
            
            this.qrData = data
        },
        (err) => {
            Utility.log(err);
        }));;
    }

    public encrypt(data:any){
        const headerOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                Authorization: this.token
            })
        };  
        return this.http.post('/rest/members/encryptText', data, headerOptions).pipe(tap (data => {
            
            this.qrData = data
        },
        (err) => {
            Utility.log(err);
        }));;
    }

         //redeem-components
            public redeemComponent(data:any){
                const headerOptions = {
                    headers: new HttpHeaders({
                        'Content-Type':'application/json',
                        'Access-Control-Allow-Origin': '*',
                        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                        Authorization: this.token
                    }),
                    params: new HttpParams().set("amountRedeem", data.amountRedeem).set("serviceRedeem", data.serviceRedeem).set("centreRedeem", data.centreRedeem).set("dateRedeem", data.dateRedeem).set("referenceRedeem", data.referenceRedeem)
                };  
                return this.http.get('/rest/members/redeemComponent',headerOptions).pipe(tap (res => {
                     this.redeemGold = res;
                },
                (err) => {
                    Utility.log('redeemComponent() Error...');
                    Utility.log(err);
                }));;
            }
    
        //redeem-details 
        public redeemDetails(data:any){
            return this.http.post('rest/members/redeemDetails',data, this.headerOptions).pipe(tap (data => {
                 
            },
            (err) => {
                Utility.log('redeemDetails() Error...');
                Utility.log(err);
            }));;
        }
        //generate-qr-redeem
        public redeemQrCode(){  
            return this.http.get('/rest/members/redeemQrCode',this.headerOptions).pipe(tap (res => {
                 this.redeemQr = res;
            },
            (err) => {
                Utility.log('redeemQrCode() Error...');
                Utility.log(err);
            }));;
        }
        //cancel-redeem
        public redeemCancel(data:any){ 
            return this.http.get('/rest/members/redeemCancel/'+data,this.headerOptions).pipe(tap (res => {
                 this.redeemQr = res;
            },
            (err) => {
                Utility.log('redeemCancel() Error...');
                Utility.log(err);
            }));;
        }
         //display redeem provider
         public redeemProvider(){ 
            const headerOptions = {
                headers: new HttpHeaders({
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    Authorization: this.token
                }),
            };  

            return this.http.get('/rest/members/redeemProvider', headerOptions).pipe(tap (res => {
            },
            (err) => {
                Utility.log('redeemProvider() Error...');
                Utility.log(err);
            }));;
         }
          //display redeem center
          public redeemCenter(data:any){
            return this.http.get('/rest/members/redeemCenter/'+data,this.headerOptions).pipe(tap (res => {
                 
            },
            (err) => {
                Utility.log('redeemCenter() Error...');
                Utility.log(err);
            }));;
         }
         //display redeem info
         public redeemInfo(data:any){
            return this.http.get('/rest/members/redeemInfo/'+data,this.headerOptions).pipe(tap (res => {
                 
            },
            (err) => {
                Utility.log('redeemInfo() Error...');
                Utility.log(err);
            }));;
         }
         //display redeem scan
         public redeemScan(data:any){
            return this.http.get('/rest/members/redeemScan/'+data,this.headerOptions).pipe(tap (res => {
                 
            },
            (err) => {
                Utility.log('redeemScan() Error...');
                Utility.log(err);
            }));;
         }
         //pledge-components
         public pledgeComponent(data:any){
            const headerOptions = {
                headers: new HttpHeaders({
                    'Content-Type':'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    Authorization: this.token
                }),
                params: new HttpParams().set("pledgeProvider", data.pledgeProvider).set("pledgeAmount", data.pledgeAmount).set("pledgeReference", data.pledgeReference)
            };  
            return this.http.get('/rest/members/pledgeComponent',headerOptions).pipe(tap (res => {
                 this.pledgeGold = res;
            },
            (err) => {
                Utility.log('pledgeComponent() Error...');
                Utility.log(err);
            }));;
        }
        //pledge-details 
        public pledgeDetails(data:any){
            return this.http.post('rest/members/pledgeDetails',data, this.headerOptions).pipe(tap (data => {
                
            },
            (err) => {
                Utility.log('pledgeDetails() Error...');
                Utility.log(err);
            }));;
        }
        //display pledge provider
        public pledgeProvider(data:any){  
            return this.http.get('/rest/members/pledgeProvider/'+data, this.headerOptions).pipe(tap (res => {
            },
            (err) => {
                Utility.log('pledgeProvider() Error...');
                Utility.log(err);
            }));;
            
         }

         //calculate pledge
         public calculatePledge(data:any){ 
            return this.http.get('/rest/members/calculatePledge/'+data, this.headerOptions).pipe(tap (res => {
                 
            },
            (err) => {
                Utility.log('calculatePledge() Error...');
                Utility.log(err);
            }));;
         }

         //get list pledge user
         public getPledgeList(){
            return this.http.get('rest/members/getPledgeList/', this.headerOptions).pipe(tap (data => {
                
            },
            (err) => {
                Utility.log('getPledgeList() Error...');
                Utility.log(err);
            }));;
        }

        //get list pledge provider
        public getPledgeListProvider(){
            return this.http.get('rest/members/getPledgeListProvider/', this.headerOptions).pipe(tap (data => {
               
            },
            (err) => {
                Utility.log('getPledgeListProvider() Error...');
                Utility.log(err);
            }));;
        }
        //get pledge id
        public getPledgeId(value: String) {
            const headerOptions = {
                headers: new HttpHeaders({
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    Authorization: this.token
                })
            };  
            return this.http.get('/rest/members/getPledgeId/'+value, headerOptions).pipe(tap (data => {
                this.receiver = of(data).toPromise();
                this.idPledge = value;
            },
            (err) => {
                Utility.log('getPledgeId() Error...');
                Utility.log(err);
            }));;
        }

        //pay pledge
        public payPledge(value:String){
            return this.http.get('rest/members/payPledge/'+value, this.headerOptions).pipe(tap (data => {
                 //Utility.log(data);
            },
            (err) => {
                Utility.log('payPledge() Error...');
                Utility.log(err);
            }));;
        }

        public uploadMerchantVerificationData(data:FormData, cert:boolean){
            const headerOptions = {
                headers: new HttpHeaders({
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
                    Authorization: this.token
                })
            };  
    
            return this.http.post('/rest/members/uploadMerchantVerificationData/'+cert, data ,headerOptions).pipe(tap (data => {
                
            },
            (err) => {
                Utility.log('uploadMerchantVerificationData() Error...');
                Utility.log(err);
            }));;
        }

        public merchantProduct(value: String){
            return this.http.get('rest/members/merchantProductsList/'+value, this.headerOptions).pipe(tap (data => {
                this.sellGoldData = data;
            },
            (err) => {
                Utility.log('merchantProduct() Error...');
                Utility.log(err);
            }));;
        }

        public merchantRecycle(){
           
            return this.http.get('rest/members/merchantRecycleList', this.headerOptions).pipe(tap (data => {
                this.sellGoldData = data;
            },
            (err) => {
                Utility.log('merchantRecycle() Error...');
                Utility.log(err);
            }));;
        }

        public recyclePayment(data:any){
            return this.http.post('rest/members/recyclePayment',data, this.headerOptions).pipe(tap (data => {
                
            },
            (err) => {
                Utility.log('recyclePayment() Error...');
                Utility.log(err);
            }));;
        }
}
