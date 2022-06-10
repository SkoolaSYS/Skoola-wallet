import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html'
})
export class ProductsDetailsComponent implements OnInit {
  data: any[] = [];
  productList: any = [];
  productName: string;
  productDesc: string;
  productPrice: number;
  productImage: any;
  productId: number;
  totalPriceService: string;
  userInput: any = [];
  prodId: number;
  memberId;

  constructor(private services:Services, private router: Router, private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.productId =  parseInt(this.router.url.split("?")[1].split("=")[1])
    this.services.merchantProductId(this.productId).subscribe((res: any) => {
      this.productList = res;
        this.data.push([{
            productName : this.productList.productName,
            productDesc: this.productList.productDesc,
            productPrice: this.productList.price,
            productImage: this.productList.productImage
        }])
        this.userInput.push(0);
    });
  }

  totalPrice(){
    let totalPriceProduct = 0;

    totalPriceProduct += this.userInput * this.productList.price;
    this.totalPriceService = totalPriceProduct.toString();
  }


  incQuantity(i: string) {
    this.userInput[parseInt(i)] = this.userInput[parseInt(i)] + 1;

  }
  decQuantity(i: string) {
    this.userInput[parseInt(i)] = this.userInput[parseInt(i)] - 1;

  }

  async confirm(): Promise<void>{
    this.totalPrice();
    const balance = parseFloat(this.services.currentBalance);
    const amount = parseFloat(this.totalPriceService);
    if (amount <= balance){
    this.spinner.show();

      this.services.amountServicePay = this.totalPriceService;
    const currentUser = await this.services.currentUser;
    this.services.servicePay({
      amount: this.totalPriceService,
      productId: this.productId
    }).subscribe((res) =>{

      const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "Your payment has been successfully processed." } });
      dialogRef.afterClosed().subscribe(() => {
        this.router.navigate(['dashboard']);
      });

    }),(err)=>{
      this.spinner.hide();

          const dialogRef = this.dialog.open(AlertDialogComponent, { data: { message: "There was an error processing your request. Please try again." } });
          dialogRef.afterClosed().subscribe(() => {
            this.router.navigate(['dashboard']);
          });

        }
    }else{
      this.dialog.open(AlertDialogComponent, { data: { message: "The entered amount exceeds the available balance in your wallet account." } });
    }
  }
}
