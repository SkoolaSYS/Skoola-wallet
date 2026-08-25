import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';
import { Utility } from 'src/utils';
import { Services } from '../../../services/service';
// import { MayaService } from "../maya.service";
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html'
})

export class SubscribeComponent {
  @ViewChildren("subTotalWrap") subTotalItems: QueryList<ElementRef>;
  @ViewChildren("subTotalWrap_existing") subTotalItems_existing: QueryList<
    ElementRef
  >;


  services: any;
  currencyType: any;
  topupBalance: any;
  totalBalance: any;
  amount: string;

  constructor(

    public cartService: CartService,
    // private mayaService: MayaService,
    private service: Services, private router: Router,
    private spinner: NgxSpinnerService, private dialog: MatDialog) { }

  items = [];

  student: any;
  fees = [{ variationCost: "25.00" }]
  private isChecked = false;

  //----- calculate total
  get total() {
    return this.items.reduce(
      (sum, x) => ({
        fee: 25.00,
        name: sum.name + 1 * 25.00
      }),
      { name: 0 }
    ).name;
  }

  changeSubtotal(item, index) {
    const amt = item.name;
    const subTotal = amt;

    this.subTotalItems.toArray()[
      index
    ].nativeElement.innerHTML;
    this.cartService.saveCart();
  }

  //----- clear cart item
  clearCart(items) {
    this.items.forEach((item, index) => this.cartService.removeItem(index));
    this.cartService.clearCart(items);
    this.items = [...this.cartService.getItems()];
  }

  toggleItemInCart(item) {
    if (!this.cartService.itemInCart(item)) {
      this.isChecked = false;
      this.cartService.addToCart(item);
    } else {
      this.cartService.removeItem(item);
    }
    this.items = [...this.cartService.getItems()];
  }

  async ngOnInit(): Promise<void> {

    this.cartService.loadCart();
    this.items = this.cartService.getItems();

    // const parents: any = await this.service.currentUser;
    // if (parents.id.toString() in localStorage) {
    //   let data = localStorage.getItem(parents.id.toString());
    //   let obj;
    //   try {
    //     obj = JSON.parse(data);
    //     Utility.log("counter:", obj.counter);
    //     this.service.counter = obj.counter;
    //   }
    //   catch (e) {
    //     Utility.log(e);
    //   }

    // }
    // const parents: any = await this.service.currentUser;
    // if (parents && parents.id) {
    //   this.service.getChildsData(parents.id.toString()).subscribe(message => {
    //     this.student = message;
    //     console.log(this.student);
    //   });
    // }
    const parents: any = await this.service.currentUser;
    if (parents && parents.id) {
      this.service.getChildsData(parents.id.toString()).subscribe(
        (message) => {
          this.student = message;
          console.log('Parent id',parents.id.toString());
          console.log('Child List',this.student);
        },
        (error) => {
          console.error('Error fetching child data:', error);
        }
      );
    }
    // this.student = this.mayaService.regData.students;

    // this.service.getChildsData(parents.id.toString()).subscribe(message => this.student = message);
    // console.log(this.student)

    this.service.getAccountBalance().subscribe((res: any) => {
      this.currencyType = res[0].account.type.currency.symbol;
      this.currencyType = res[0].account.type.currency.symbol;
      this.topupBalance = res[0].status.topupBalance;
      this.totalBalance = res[0].status.totalBalance;
      this.service.topupBalance = this.topupBalance;
    });
  }

  async confirm(id: number): Promise<void> {
    const balance = parseFloat(this.service.currentBalance);
    const amount = parseFloat(this.total);
    if (amount <= balance) {
      this.spinner.show();
      const sendNextId = () => {
        if (this.items.length === 0) {
          this.clearCart(this.items);
          this.dialog.open(AlertDialogComponent, { data: { message: "Your Payment was successful!" } });
          this.router.navigate(['dashboard']);
          return;
        }
        const item = this.items.shift();
        this.service.subscribePay(item.id)
          .subscribe(data => {
            console.log(`Payment for Child id ${item.id} successful!`, data);
            sendNextId();
          },
            error => {
              console.error(`Payment for Child id ${item.id} failed`, error);
            });
      };
      sendNextId();
    } else {
      this.dialog.open(AlertDialogComponent, { data: { message: "The total payment amount exceeds the available balance in your wallet account. Please load your account and try again" } });
      const currentUser: any = await this.service.currentUser;
      if (currentUser.bankLoad) {
        this.router.navigate(['bankload']);
      } else {
        this.router.navigate(['add-bank-load'], { queryParams: { bankLoad: true } });
      }
    }
  }

}