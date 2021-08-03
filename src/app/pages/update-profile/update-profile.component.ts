import { Component, OnInit } from '@angular/core';
import { Services } from 'src/app/services/service';
import { Router } from '@angular/router';
import { NgPopupsService } from 'ng-popups';
import { Utility } from 'src/utils';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.scss']
})
export class UpdateProfileComponent implements OnInit {
  public updateForm: any = {};
  private file: File = null;
  public imageSrc: any = "assets/icons-img/user-dp.png";

  constructor(private services: Services, private router: Router, private ngPopups: NgPopupsService) { }

  async ngOnInit(): Promise<void> {
    const currentUser: any = await this.services.currentUser;

    // TODO: Pre-fill user profile fields with data from cbs here.
    if (currentUser.email)
      this.updateForm.email = currentUser.email;
    
    if (currentUser.phoneNo)
    this.updateForm.phoneNo= currentUser.phoneNo;
    
    if (currentUser.homeAddress)
    this.updateForm.address = currentUser.homeAddress;

    if (currentUser.postalCode)
    this.updateForm.postalCode = currentUser.postalCode;

    if (currentUser.city)
    this.updateForm.city= currentUser.city;

    if (currentUser.images && currentUser.images.length != 3) {
      this.imageSrc = Utility.rebaseImageUrl(currentUser.images[0].thumbnailUrl);
    }
  }
  
  onSelectedFile(event){
    const self = this;

    if (event.target.files && event.target.files[0]){
      const reader: FileReader = new FileReader();
      reader.onload = function() {
        self.imageSrc = reader.result;  
      }

      reader.readAsDataURL(event.target.files[0]);
      this.file = event.target.files[0];
    }
  }

  async onSubmit() {
    let formData: FormData = new FormData();
    let data: any = {};
    let customValues: any[] = [];
    
    if (this.updateForm.email)
      data.email = this.updateForm.email;
        
    if (this.updateForm.phone)
      customValues.push({
        "internalName": "mobilephone",
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
    
    await this.services.updateProfileWithImage(formData).toPromise()
    .then(() => {
      this.ngPopups.alert('Your profile has been sucessfully updated!');
      this.router.navigate(['dashboard']);
    })
    .catch((err) => {
      this.ngPopups.alert('There was an error in your submission!');
    });
  }
}
