// src/app/canteen/canteen.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MenuItem } from '../menu-item.model';
import { Order } from '../order.model';
import { Utility } from 'src/utils';
import { Services } from 'src/app/services/service';

@Component({
  selector: 'app-canteen',
  templateUrl: './canteen.component.html',
  // styleUrls: ['./canteen.component.css'],
})
export class CanteenComponent implements OnInit {
  isMerchant: boolean = false;
  canteenId: number = 1;
  menuItems: MenuItem[] = [];
  orderedItems: MenuItem[] = [];
  currencyType: any;
  toggleEditStatus(item: any): void {
    if (item.editingStatus) {
      item.status = item.selectedStatus;
    }
    item.editingStatus = !item.editingStatus;
  }


  constructor(private dataService: DataService, private service: Services) { }

  ngOnInit() {
    // Fetch menu items and merchant status from the data service
    this.menuItems = this.dataService.getMenuItems();

    this.service.getAccountBalance().subscribe((res: any) => {
      this.currencyType = res[0].account.type.currency.symbol;
    },
      (err) => {
        Utility.log(err);
        // this.service.logout();
      });
    // Add dummy data for testing
    this.menuItems.push(
      new MenuItem(1, 'nasi lemak', 5.99, this.canteenId, new Date()),
      new MenuItem(2, 'mee goreng', 8.99, this.canteenId, new Date()),
      new MenuItem(3, 'bihun goreng', 4.99, this.canteenId, new Date())
    );

    if (!this.isMerchant) {
      // Add dummy data for ordered items
      this.orderedItems.push(
        new MenuItem(1, 'nasi lemak', 7, this.canteenId, new Date()),
        new MenuItem(2, 'nasi ayam', 10, this.canteenId, new Date()),
        new MenuItem(3, 'nasi goreng', 30, this.canteenId, new Date()),
        new MenuItem(4, 'mee goreng', 20, this.canteenId, new Date()),
        new MenuItem(5, 'maggie goreng', 10, this.canteenId, new Date())
      );
    }
  }

}
