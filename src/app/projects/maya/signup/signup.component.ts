import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgPopupsService } from "ng-popups";
import { Services } from "src/app/services/service";
import { Utility } from "src/utils";
import { AuthService } from "src/app/services/auth.service";
import { NgxSpinnerService } from "ngx-spinner";
import { MayaService } from "../maya.service";

const GNG_SM_ID: number = 266;
const GNG_ACTIVATION_FEE: number = 25.0;
const GNG_ACCOUNT_FEE = 1.0;

@Component({
  selector: "app-signup-maya",
  templateUrl: "./signup.component.html",
})
export class SignupMayaComponent implements OnInit {
  // Onboarding process (kinah)
  isChecked = true;
  userName: boolean = true;
  userNameLong: boolean = true;
  nameFull: boolean = true;
  emailAddr: boolean = true;
  emailValid: boolean = true;
  ic: boolean = true;
  phone: boolean = true;
  newPass: boolean = true;
  confirmPass: boolean = true;
  hide: boolean = true;
  hideConfirm: boolean = true;
  loginUsername: string;
  fullName: string;
  emailAddress: string;
  noTelephone: string;
  nricNumber: string;
  createPassword: string;
  confirmPassword: string;
  homeAddress: string;
  postalCode: string;
  stateCity: string;
  parentId: string;
  errorObj: any;
  cardSelect1: boolean;
  cardSelect2: boolean;
  data: any = [];
  agree: string;
  yesCard: string;
  cardSelection: string;
  errorMessage: any = [
    { field: "email", reason: "Email has been used" },
    { field: "mobilePhone", reason: "Phone number has been used" },
  ];

  dependants: any = [];

  public href: string = "";

  constructor(private services: Services, private mayaService: MayaService, private ngPopups: NgPopupsService, private router: Router, private authService: AuthService, private spinner: NgxSpinnerService) {
    // only do this for the first time
    // if (Object.keys(this.mayaService.signupData).length == 0) {
      this.mayaService.signupData.fullName = this.mayaService.regData.name;
      this.mayaService.signupData.emailAddress = this.mayaService.regData.email;
      this.mayaService.signupData.noTelephone = this.mayaService.regData.mobile;
      this.mayaService.signupData.nricNumber = this.mayaService.regData.nationalId;

    // }
  }

  async ngOnInit(): Promise<void> {
    this.spinner.hide();
    // Append smId to signup page; /signup?smId=
    this.href = this.router.url;

    let agree = this.router.url.split("?")[1].split("=")[1];

    this.isChecked = true;

    // queryStr = queryStr.replace(/%20/g, '+');
    // await this.services.decrypt({ text: queryStr, skipValidation: true }).toPromise();
    // this.services.qrData = JSON.parse(this.services.qrData.decryptText)

    // this.parentId = this.router.url.split("?")[1].split("=")[1].split("&")[0];
    // this.agree = this.router.url.split("?")[1].split("=")[2];

    try {
      this.loginUsername = this.mayaService.signupData.username;
      this.fullName = this.mayaService.signupData.fullName;
      this.emailAddress = this.mayaService.signupData.emailAddress;
      this.noTelephone = this.mayaService.signupData.noTelephone;
      this.nricNumber = this.mayaService.signupData.nricNumber;
      this.createPassword = this.mayaService.signupData.createPassword;
      this.confirmPassword = this.mayaService.signupData.confirmPassword;
      this.homeAddress = this.mayaService.signupData.homeAddress;
      this.postalCode = this.mayaService.signupData.postalCode;
      this.stateCity = this.mayaService.signupData.stateCity;
      this.cardSelect1 = this.mayaService.signupData.cardSelection;
      if (this.cardSelect1) {
        var btn1 = <HTMLInputElement>document.getElementById("radioBtn1");
        btn1.checked = true;
        document.getElementById("yesWant").style.display = "block";
      } else {
        var btn2 = <HTMLInputElement>document.getElementById("radioBtn2");
        btn2.checked = true;
      }

      this.dependants = this.mayaService.regData.students;

    } catch (e) {
      Utility.log(e);
    } finally {
    }

    if (agree == "1") this.tickCheckbox();
  }
  // Toggle Password Visibility
  showPassword() {
    this.hide = !this.hide;
    if (!this.hide) {
      document.getElementById("togglePassword1").setAttribute("class", "bi-eye");
    } else {
      document.getElementById("togglePassword1").setAttribute("class", "bi-eye-slash");
    }
  }
  showConfirmPassword() {
    this.hideConfirm = !this.hideConfirm;
    if (!this.hideConfirm) {
      document.getElementById("togglePassword2").setAttribute("class", "bi-eye");
    } else {
      document.getElementById("togglePassword2").setAttribute("class", "bi-eye-slash");
    }
  }
  //Radio Button remains checked after page load
  radioButton() {
    var yesRadio = <HTMLInputElement>document.getElementById("radioBtn1");
    yesRadio.checked = true;
  }
  //Terms & Condition Agree or Disagree; agree, checkbox remains tick
  tickCheckbox() {
    var agreeCheckbox = <HTMLInputElement>document.getElementById("checkAgree");
    agreeCheckbox.checked = true;
  }
  //Terms & Condition; navigate to User Agreement page while passing data from Signup page
  agreementCheckbox() {
    this.mayaService.signupData.username = this.loginUsername;
    this.mayaService.signupData.fullName = this.fullName;
    this.mayaService.signupData.emailAddress = this.emailAddress;
    this.mayaService.signupData.noTelephone = this.noTelephone;
    this.mayaService.signupData.nricNumber = this.nricNumber;
    this.mayaService.signupData.createPassword = this.createPassword;
    this.mayaService.signupData.confirmPassword = this.confirmPassword;
    this.mayaService.signupData.homeAddress = this.homeAddress;
    this.mayaService.signupData.postalCode = this.postalCode;
    this.mayaService.signupData.stateCity = this.stateCity;
    // this.mayaService.signupData.parentId = this.parentId;
    var btn1 = <HTMLInputElement>document.getElementById("radioBtn1");
    this.mayaService.signupData.cardSelection = btn1.checked;

    this.router.navigate(["user-agreement-page"], { queryParams: { origin: "register-gng" } });
  }
  // Select Physical Card; If yes, display hidden div incl HomeAddress, PostalCode, City (kinah)
  selectCard(card) {
    if (card == 1) {
      document.getElementById("yesWant").style.display = "block";
      this.cardSelect1 = true;
      this.cardSelect2 = false;
    } else {
      document.getElementById("yesWant").style.display = "none";
      this.cardSelect1 = false;
      this.cardSelect2 = true;
    }
    return;
  }
  // Insert Sign Up user to back-end (kinah)
  async doSignupUser() {
    let data: any = {};
    let customValues: any[] = [];

    if (this.createPassword != this.confirmPassword) {
      this.ngPopups.alert("Password mismatch. Please re-keyin your new password!", { theme: "material", title: "Oops..." });
      this.createPassword = "";
      this.confirmPassword = "";
    } else {
      var agreeCheckbox = <HTMLInputElement>document.getElementById("checkAgree");
      if (agreeCheckbox.checked != true) {
        this.ngPopups.alert("Please tick User Agreement!", { theme: "material", title: "Oops..." });
      } else {
        if (this.emailAddress) {
          this.emailAddr = true;
          if (Utility.validateEmail(this.emailAddress)) {
            this.emailValid = true;
          } else {
            this.emailValid = false;
          }
        } else {
          this.emailAddr = false;
        }

        if (this.loginUsername) {
          this.userName = true;
          if (this.loginUsername.length > 4) {
            this.userNameLong = true;
          } else {
            this.userNameLong = false;
          }
        } else {
          this.userName = false;
        }

        if (this.fullName) {
          this.nameFull = true;
        } else {
          this.nameFull = false;
        }

        if (this.nricNumber) {
          this.ic = true;
          customValues.push({
            internalName: "NRIC",
            value: this.nricNumber,
          });
        } else {
          this.ic = false;
        }

        if (this.noTelephone) {
          this.phone = true;
          customValues.push({
            internalName: "mobilePhone",
            value: this.noTelephone,
          });
        } else {
          this.phone = false;
        }

        if (this.homeAddress)
          customValues.push({
            internalName: "address",
            value: this.homeAddress,
          });

        if (this.postalCode)
          customValues.push({
            internalName: "postalCode",
            value: this.postalCode,
          });

        if (this.stateCity)
          customValues.push({
            internalName: "city",
            value: this.stateCity,
          });

        if (this.createPassword) {
          this.newPass = true;
        } else {
          this.newPass = false;
        }

        if (this.confirmPassword) {
          this.confirmPass = true;
        } else {
          this.confirmPass = false;
        }

        if (customValues.length != 0) data.customValues = customValues;

        if (this.userName && this.nameFull && this.emailAddr && this.phone && this.ic && this.newPass && customValues != null) {
          this.errorMessage.push({ field: this.loginUsername, reason: "Username has been used" });
          this.spinner.show();
          this.services
            .signupUser({
              name: this.fullName,
              email: this.emailAddress,
              useDummyEmail: false,
              username: this.loginUsername,
              password: this.createPassword,
              useDefaultCredentials: false,
              customValues: customValues,
              superMerchantId: GNG_SM_ID,
              cardRequest: this.cardSelect1,
              active: true,
              createCard: false
            })
            .toPromise()
            .then(async (data) => {
              Utility.log(JSON.stringify(data));

              // register all dependants
              for (const element of this.dependants) {
                Utility.log("Registering dependant: " + element.name);
                
                let reqData: any = {
                  name: element.name,
                  useDefaultCredentials: true,
                  customValues: customValues,
                  superMerchantId: GNG_SM_ID,
                  cardRequest: false,
                  active: false,
                  createCard: false,
                  custodianId: data["memberId"],
                  targetGroupId: 12 // Full member (Smart School)
                };

                if (element.email != "" && element.email != undefined)
                  reqData.email = element.email;
                else
                  reqData.useDummyEmail = true;

                customValues = [];
                if (element.mobile != "" && element.mobile != undefined)
                  customValues.push({ internalName: "mobilePhone", value: element.mobile });
                else
                  customValues.push({ internalName: "mobilePhone", value: this.noTelephone });
                customValues.push({ internalName: "NRIC", value: element.nationalId });

                reqData.customValues = customValues;

                await this.services
                .signupUser(reqData)
                .toPromise()
                .then((data) => {
                  Utility.log("User registered " + JSON.stringify(data));
                });
              }
              
              this.spinner.hide();
              this.router.navigate(["../acknowledgement-page"]);
            })
            .catch((err) => {
              this.spinner.hide();
              this.errorObj = this.errorMessage.find((error) => error.field === err.error.field);
              this.ngPopups.alert(this.errorObj.reason, { theme: "material", title: "Oops..." });
            });
        }
      }
    }
  }
}
