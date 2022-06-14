import { environment } from "./environments/environment";

export enum TRANSACTION_TYPE {
  // These values correspond to the 'id' column in 'transaction_fees' table
  // aka transaction fee id.
  // TODO: Perhaps this needs to be changed to TRANSACTION_FEE_TYPE?
  Transfer = 5,
  BankLoad = 6,
  BuyGold = 3,
  SellGold = 4,
  Withdraw = 8,
  QrPayment = 15,
  Topup = 17
}

export class Utility {

  /*
   * This is a workaround to enable images from cbs server to be displayed on pwa client.
   * The issue is images returned from cbs server have their url's server set to client's IP
   * which by right, it should be set to the server's IP.
   * TODO: Explore better and cleaner way to achieve this. (rwa) 
   */
  static rebaseImageUrl(url: string): string {
    let newUrl: string = "";

    if (url) {
      const queryStr = url.split("komeps")[1];
      newUrl = environment.proxyTarget + queryStr;  
    }
    
    return newUrl;
  }

  static formatDate(date: Date): string {
    const day = date.getDate();
    const month = date.getMonth() + 1;

    return (day < 10 ? "0" : "") + day + "/" + (month < 10 ? "0" : "") + month + "/" + date.getFullYear();
  }

  static validateEmail(email):boolean {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false;
  }

  // Set 'override' to true in order to force printing to console (USE WITH CARE!).
  static log(message: string, override: boolean = false) {
    if (environment.logging == false && override == false)
      return;

    console.log(message);
  }
}