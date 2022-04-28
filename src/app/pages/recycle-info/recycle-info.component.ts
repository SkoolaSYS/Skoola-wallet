import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { concatMapTo } from 'rxjs/operators';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-recycle-info',
  templateUrl: './recycle-info.component.html'
})
export class RecycleInfoComponent implements OnInit {
  amount: any;
  merchantName: any;
  isRecycle: boolean;
  memberId;
  isMerchant: boolean;
  merchant:any;
  recycleWaste: any;
  recycleWeight: any;
  data: any[]=[];

  constructor(private services: Services, private route: Router, private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  async ngOnInit(): Promise <void> {
    const currentUser: any = await this.services.currentUser;
    this.isMerchant = currentUser.merchant
    this.amount = this.services.qrData.amount;
    this.merchant = this.services.qrData.merchantId;
    this.recycleWaste = this.services.qrData.recycleWaste;

    for(var i = 0; i < this.recycleWaste.length; i++){
      this.data.push([{
        recycleWaste: this.services.qrData.recycleWaste[i],
        recycleWeight: this.services.qrData.recycleWeight[i]
      }])
    }

    this.services.loadById(this.services.qrData.merchantId).subscribe((res:any)=>{
      this.memberId= res.id;
      this.merchantName = res.name;
      
    },
    (err) => {
      (err);
      // this.services.logout();
    });
  }

  async confirm(): Promise<void>{
   
        this.spinner.show();

        this.services.recyclePayment({
          memberId: this.memberId,
          merchant: this.merchant,
          amount: this.amount
        }).subscribe((res) =>{
          this.spinner.hide();
  
          const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "Your payment has been successfully processed." } });
          dialogRef.afterClosed().subscribe(() => {
            this.route.navigate(['dashboard']);
          });
        },
        (err) => {
          this.spinner.hide();

          const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
          dialogRef.afterClosed().subscribe(() => {
            this.route.navigate(['dashboard']);
          });
        })
      
  }  

}
