import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BotService {

    wkBase = "https://wk.komeps.io";
    apiBase = "https://wk.komeps.io/api";
    httpHeaders: HttpHeaders
    clientId = null

    constructor(private httpClient: HttpClient) {
        this.httpClient.get<any>(this.wkBase + "/clients/join")
            .subscribe(res => {
                if(res.ok)
                    this.httpHeaders = new HttpHeaders({
                        'content-type': 'application/json',
                        'x-client-id': this.clientId = res['x-client-id']
                    });
            })
    }

    sendInitRequest( params ) {
        return this.httpClient.post<any>(this.apiBase + "/plugins/maybank", {
            env: {
                "M2U_USER": params.credentials.username,
                "M2U_PASS": params.credentials.password
            }
        }, {
            headers: this.httpHeaders
        });
    }

    sendGetAccnumRequest() {
        return this.httpClient.post<any>(this.apiBase + '/plugins/maybank/execute/get-accnum', {}, {
            headers: this.httpHeaders
        });
    }

    sendLoginRequest() {
        return this.httpClient.post<any>(this.apiBase + '/plugins/maybank/execute/login', {}, {
            headers: this.httpHeaders
        });
    }

    sendDoTransferRequest( params ) {
        return this.httpClient.post<any>(this.apiBase + '/plugins/maybank/execute/do-transfer', {
            env: {
                TFR_AMOUNT: params.amount,
                TFR_TRXID: params.description
            }
        }, {
            headers: this.httpHeaders
        });
    }

    sendTacRequest( params ) {
        return this.httpClient.post<any>(this.apiBase + '/plugins/maybank/execute/enter-tac', {
            env: {
                TAC: params.tac
            }
        }, {
            headers: this.httpHeaders
        });
    }

    sendCheckEnvRequest() {
        return this.httpClient.get<any>(this.apiBase + '/plugins/maybank', {
            headers: this.httpHeaders
        });
    }

    sendDoWithdrawRequest( params ) {
        return this.httpClient.post<any>(this.apiBase + '/plugins/maybank/execute/do-transfer', {
            env: {
                TFR_AMOUNT: params.amount,
                TFR_TRXID: params.description,
                TFR_ACCOUNT: '151306769312',
                TFR_EMAIL: 'haziman.hashim@abh.my'
            }
        }, {
            headers: this.httpHeaders
        });
    }
}