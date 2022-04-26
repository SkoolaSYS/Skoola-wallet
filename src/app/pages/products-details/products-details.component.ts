import { Component, OnInit } from '@angular/core';
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

  constructor(private services:Services) { }

  ngOnInit(): void {
    this.services.merchantProduct(this.services.qrData.merchantId).subscribe((res: any) => {
      this.productList = res;
      Utility.log(this.productList)
      try{
        this.data.push([{
            productName : this.productList.productName,
            productDesc: this.productList.productDesc,
            productPrice: this.productList.price,
            productImage: this.productList.productImage
        }])

      }catch(e){

      }
    });
  }


}
