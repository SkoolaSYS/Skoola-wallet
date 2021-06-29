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

    if (currentUser.images) {
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
        "internalName": "phone",
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
    
    await this.services.updateProfileWithImage(formData).toPromise();

    this.ngPopups.alert('Your profile has been sucessfully updated!');
    this.router.navigate(['dashboard']);
  }
}
