import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { NgxSpinnerService } from 'ngx-spinner';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-add-bank-load',
  templateUrl: './add-bank-load.component.html'
})
export class AddBankLoadComponent implements OnInit {
  banks:any = [];
  bankFormCountry = "MY";
  bankFormName = null;
  bankFormAccName;
  bankFormAccNumber;
  fromBankLoad: boolean;

  constructor(private services:Services, private ngPopups: NgPopupsService, private router:Router, 
              private route: ActivatedRoute, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    this.services.getBankData(this.bankFormCountry).subscribe((res: any) => {
      //this.banks = res;
      this.banks[0] = res[0]
      this.banks[1] = res[1]
      this.banks[2] = res[6]
    });   
    this.spinner.hide();

    this.route.queryParamMap.subscribe((params) => {
      if (params.has("bankLoad"))
        this.fromBankLoad = params.get("bankLoad") == 'true';
    });   
  }
  
  async doAddBank(bankFormName,bankFormAccName:string,bankFormAccNumber:string){
    //console.log("click confirm");
    this.spinner.show();

    if (bankFormName != null && bankFormAccName != null && bankFormAccNumber != null){
      await this.services.sendAddBankLoad({
      bankId: bankFormName,
      bankAccName: bankFormAccName,
      bankAccNumber: bankFormAccNumber
    }).toPromise().then(() => {
      this.spinner.hide();
      this.ngPopups.alert('Your bank load details has been sucessfully added!');

      if (this.fromBankLoad)
        this.router.navigate(['bankload']);
      else
        this.router.navigate(['dashboard']);
    })
    .catch((err) => {
      this.spinner.hide();
      this.ngPopups.alert('There was an error in your submission!');
    });  
  }}

}
