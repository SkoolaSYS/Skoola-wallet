import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, ExtraOptions, Router } from '@angular/router';
import { TRANSACTION_TYPE } from 'src/utils';
import { Services } from '../../services/service';
//qr payment danieal
// to do (auto select merchant account)
const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};
const routes: Routes = [
  {
    path: 'content',
  },
  {
    path: '',
    redirectTo: 'content',
    pathMatch: 'full'
  }
 ]
@Component({
  selector: 'app-transfer',
  templateUrl: './qr-payment.component.html'
})
export class QrPaymentComponent implements OnInit {
  public merchant: any= [];
  public transferForm: any = {};
  merchantSelected : any;
  receiverId: number;
  receiverName: string;
  amount: any;
  effectiveDate:string;
  merchantName:string;

  constructor(private service: Services, private router:Router) { }
  ngOnInit(): void {
    console.log(this.router.url)
    this.service.loadById(this.router.url.split("?")[1].split("=")[1]).subscribe((res: any) => {
    console.log(res);
    this.receiverId= res.id;
    this.receiverName= res.name;
    this.merchantName= res.name;

    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    // TODO: Currently we're making effective date only accept current date, hence the input is read-only.
    this.effectiveDate = (day < 10 ? "0" : "") + day + "/" + (month < 10 ? "0" : "") + month + "/" + today.getFullYear();
   },
      (err) => {
        console.log(err);
        this.service.logout();
      });
    }
    async onSubmit() {
      console.log('onsubmit');
      await this.service.paymentTransfer({
       toMemberId: this.receiverId,        // this.form.toMemberId,
       toMemberPrincipal: this.receiverName,  // this.form.toMemberPrincipal,
       amount: this.amount,
       trasactionTypeId: TRANSACTION_TYPE.QrPayment
      }).toPromise();
   
      this.service.activetransaction = true;
      this.service.transactionData.amount = this.amount;
   
      this.router.navigate(['dashboard']);
     }
   }
   
  //   this.service.forms.transferForm = this.transferForm;
  //   this.service.opsTagging = 'transfer';
  //   this.merchantSelected = 'merchant01';
  //   this.service.loadById('6');
  
  
  // loadById(): void {
  //   const merchantId = this.merchant.find(merchant => merchant.id === this.merchant.id);
  //   if (merchantId) 
  //     this.transferForm.toMemberPrincipal = merchantId;
  //     this.transferForm.selectedMember = merchantId;
    
  // }


function subscribe(arg0: (res: any) => void, arg1: (err: any) => void): any {
  throw new Error('Function not implemented.');
}

function merchantId(merchantId: any) {
  throw new Error('Function not implemented.');
}

