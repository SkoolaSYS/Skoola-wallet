import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-products-card',
  templateUrl: './products-card.component.html'
})
export class ProductsCardComponent implements OnInit {
  data: any[] = [];
  productList: any = [];
  productName: string;
  productDesc: string;
  productPrice: number;
  productImage: any;

  constructor(private services:Services) { }

  ngOnInit(): void {
    Utility.log(this.services.qrData.merchantId)
    this.services.merchantProduct(this.services.qrData.merchantId).subscribe((res: any) => {
      this.productList = res;
      Utility.log(this.productList)
      try{
        for(var i = 0; i< this.productList.price.length; i++){
           this.data.push([{
            productName : this.productList.productName[i],
            productDesc: this.productList.productDesc[i],
            productPrice: this.productList.price[i],
            productImage: this.productList.productImage[i]
        }])
        }

      }catch(e){

      }
    });

  }

}
