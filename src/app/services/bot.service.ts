import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class BotService {

    apiBase = "http://af76cad9fecc.ap.ngrok.io";

    constructor(private httpClient: HttpClient) { }
    sendInitRequest( params ) {
        return this.httpClient.post<any>(this.apiBase + "/plugins/maybank", {
            env: {
                "M2U_USER": params.credentials.username,
                "M2U_PASS": params.credentials.password
            }
        });
    }

    sendGetAccnumRequest() {
        return this.httpClient.post<any>(this.apiBase + '/plugins/maybank/execute/get-accnum', {});
    }

    sendLoginRequest() {
        return this.httpClient.post<any>(this.apiBase + '/plugins/maybank/execute/login', {});
    }

    sendDoTransferRequest( params ) {
        return this.httpClient.post<any>(this.apiBase + '/plugins/maybank/execute/do-transfer', {
            TFR_AMOUNT: params.amount,
            TFR_TRXID: params.description
        });
    }

    sendTacRequest( params ) {
        return this.httpClient.post<any>(this.apiBase + '/plugins/maybank/execute/enter-tac', {
            TAC: params.tac
        });
    }

    sendCheckEnvRequest() {
        return this.httpClient.get<any>(this.apiBase + '/plugins/maybank');
    }
}