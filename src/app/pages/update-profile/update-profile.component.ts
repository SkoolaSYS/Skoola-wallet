import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Utility } from 'src/utils';
import { Ng2ImgMaxService } from 'ng2-img-max';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  public updateForm: any = {};
  private file: File = null;
  public imageSrc: any = "assets/icons-img/user-dp.png";
  activetransaction: boolean;
  currencyType: any;
  currentBalance: any;
  userName: any;
  cardNumber: any;
  transactionAmount: any;
  goldAmount: any;    // per transaction gold amount
  goldWhole: any;;    // accumulated gold amount
  goldFraction: any;  // accumulated gold amount
  

  constructor(private service: Services, private router: Router, private ngPopups: NgPopupsService, private ng2ImgMax: Ng2ImgMaxService, private spinner: NgxSpinnerService) { }

  async ngOnInit(): Promise<void> {
    this.spinner.hide();
    this.activetransaction = this.service.activetransaction;
    if (this.activetransaction === true) {
      this.transactionAmount = this.service.transactionData.amount;
      this.goldAmount = this.service.transactionData.gold;  
    }

    // this.activetransaction = true;
    this.service.getAccountBalance().subscribe((res: any) => {
      //console.log(res)
      this.currentBalance = res[0].status.availableBalance;
      this.service.currentBalance = this.currentBalance;
      this.currencyType = res[0].account.type.currency.symbol;

      const sumGoldParts = res[0].gold.sumGoldAmount.toFixed(5).toString().split(".");
      this.goldWhole = sumGoldParts[0];
      this.goldFraction = sumGoldParts[1];

      this.service.userAccount = res[0].account;
    },
    (err) => {
      console.log(err);
      // this.service.logout();
    });

    this.service.getProfileData().subscribe((res: any) => {
      // console.log(res);
      this.userName = res.name;
      this.cardNumber = res.customValues.find(object => object.internalName == "AccNumber")?.value;
    },
    (err) => {
      console.log(err);
      // this.service.logout();
    });
    const currentUser: any = await this.service.currentUser;
    console.log(currentUser);
    
    // TODO: Pre-fill user profile fields with data from cbs here.
    // try{
    //   this.updateForm.email = currentUser.email;
    // }catch(e){
    //   this.updateForm.email = null;
    // }
      
    try{
      this.updateForm.phone = currentUser.customValues.find(object => object.internalName == "mobilePhone").value; 
    }catch(e){
      this.updateForm.phone = null;
    }

    try{
      this.updateForm.address =  currentUser.customValues.find(object => object.internalName == "address").value; 
    }catch(e){
      this.updateForm.address = null;
    }
    try{
      this.updateForm.postalCode =  currentUser.customValues.find(object => object.internalName == "postalCode").value;
    }catch(e){
      this.updateForm.postalCode = null;
    }
    try{
      this.updateForm.city= currentUser.customValues.find(object => object.internalName == "city").value;
    }catch(e){
      this.updateForm.city = null;
    }

    if (currentUser.images && currentUser.images.length != 3) {
      this.imageSrc = Utility.rebaseImageUrl(currentUser.images[0].thumbnailUrl);
    }
  }

  uploadedImage: File;
  
  onSelectedFile(event){
    const self = this;

    if (event.target.files && event.target.files[0]){
      const reader: FileReader = new FileReader();
      reader.onload = function() {
        self.imageSrc = reader.result;  
      }

      reader.readAsDataURL(event.target.files[0]);
      this.file = event.target.files[0];
      this.ng2ImgMax.resizeImage(this.file, 100, 100).subscribe(
        result => {
          this.uploadedImage =new File([result], result.name);
          this.file=this.uploadedImage;
        },
        error => {
          console.log('Oh no!', error);
        }
      );
    }
  }

  async onSubmit() {
    let formData: FormData = new FormData();
    let data: any = {};
    let customValues: any[] = [];
    
    // if (this.updateForm.email)
    //   data.email = this.updateForm.email;
        
    if (this.updateForm.phone)
      customValues.push({
        "internalName": "mobilePhone",
        "value": this.updateForm.phone
      });

    if (this.updateForm.address)
      customValues.push({
        "internalName": "address",
        "value": this.updateForm.address
      });

    if (this.updateForm.postalCode)
      customValues.push({
        "internalName": "postalCode",
        "value": this.updateForm.postalCode
      });

    if (this.updateForm.city)
      customValues.push({
        "internalName": "city",
        "value": this.updateForm.city
      });
      
    if (customValues.length != 0)  
      data.customValues = customValues;
           
    formData.append("updateParams", JSON.stringify(data));

    if (this.file)
      formData.append("file", this.file);
    this.spinner.show();
    await this.service.updateProfileWithImage(formData).toPromise()
    .then(() => {
      this.spinner.hide();
      this.ngPopups.alert('Your profile has been sucessfully updated!',{theme: 'material', title: 'Success!'});
      this.router.navigate(['dashboard']);
    })
    .catch((err) => {
      this.spinner.hide();
      this.ngPopups.alert('There was an error in your submission!',{theme: 'material', title: 'Oops...'});
    });
  }
}
