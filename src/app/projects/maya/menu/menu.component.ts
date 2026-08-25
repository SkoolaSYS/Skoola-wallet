import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MenuItem } from '../menu-item.model';
import { Services } from 'src/app/services/service';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.Services';
import {FormControl} from '@angular/forms';
import { AlertDialogComponent } from 'src/app/components/alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  isMerchant: boolean = false;
  menuItems: MenuItem[] = [];
  newMenuItem: MenuItem = new MenuItem(0, '', 0, 0, new Date());
  currencyType: any;
  items: any[] = [];
  services: any;
  addClicked: boolean = false;
  editClicked: boolean = false;
  showContent: boolean = false;
  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());
  minDate: string;
  defaultDate: string;

  constructor(
    private dataService: DataService,
    private service: Services,
    private menuService: MenuService,
    private router: Router,
    private spinner: NgxSpinnerService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    // Fetch menu items and merchant status from the data service
    this.menuItems = this.dataService.getMenuItems();
    // this.isMerchant = this.dataService.getIsMerchant();
    this.menuItems.push(
      new MenuItem(1, 'Nasi ayam', 5.99, 1, new Date()),
      new MenuItem(2, 'Maggie goreng', 8.99, 1, new Date()),
      new MenuItem(3, 'Nasi lemak', 4.99, 1, new Date())
    );

    this.service.getAccountBalance().subscribe((res: any) => {
      this.currencyType = res[0].account.type.currency.symbol;
      this.currencyType = res[0].account.type.currency.symbol;
    });

    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
    
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    this.defaultDate = tomorrow.toISOString().split('T')[0];
  }

  addNewItem() {
    this.items.push({ item: '', price: '', editMode: true });
    this.addClicked = !this.addClicked;
  }

  toggleEditMode(item: any) {
    item.editMode = !item.editMode;
    this.editClicked = !this.editClicked;

    // if (item.editMode) {
    //     setTimeout(() => {
    //         item.editMode = false; // Auto-reset edit mode after 5 seconds
    //     }, 1000);
    // }
}

saveItem(item: any): void {
  if (!item.item || item.item.trim() === '') {
    if (!item.price || item.price.trim() === '') {
      if (!item.day || item.day.trim() === '') {
        // All three fields are missing
        this.dialog.open(AlertDialogComponent, { data: { message: "Please enter the item name, item price, and select the day." } });
      } else {
        // Only item name and price are missing
        this.dialog.open(AlertDialogComponent, { data: { message: "Please enter the item name and item price." } });
      }
    } else {
      // Only item name is missing
      this.dialog.open(AlertDialogComponent, { data: { message: "Please enter the item name." } });
    }
    return;
  }

  if (!item.price || item.price.trim() === '') {
    if (!item.day || item.day.trim() === '') {
      // Item name and day are provided, but price is missing
      this.dialog.open(AlertDialogComponent, { data: { message: "Please enter the item price." } });
    } else {
      // Item name and day are provided, but price is missing
      this.dialog.open(AlertDialogComponent, { data: { message: "Please enter the item price." } });
    }
    return;
  }

  // if (!item.day || item.day.trim() === '') {
  //   // Item name and price are provided, but day is missing
  //   this.dialog.open(AlertDialogComponent, { data: { message: "Please select the day." } });
  //   return;
  // }

  // All fields are present, continue with the save logic
  item.editMode = false;
  const editedMenuItems = this.menuService.getEditedMenuItems();
  const index = editedMenuItems.findIndex((i) => i.id === item.id);
  if (index !== -1) {
    editedMenuItems[index] = item;
  } else {
    editedMenuItems.push(item);
  }
  this.menuService.updateEditedMenuItems(editedMenuItems);

  // Save the updated menu items to the data service
  this.dataService.saveMenuItems(this.menuItems);
}



deleteItem(item: any) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
        this.items.splice(index, 1);
    }
    this.addClicked = !this.addClicked;

    // Auto-reset after 5 seconds
    // setTimeout(() => {
    //     this.addClicked = false;
    // }, 1000);
}

cancel(item: any, itemValue: string, priceValue: string) {
    if (itemValue.trim() === '' && priceValue.trim() === '') {
        // If both inputs are empty, remove the row
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
    } else if (itemValue.trim() === '' || priceValue.trim() === '') {
        // If either input has data, disable the inputs and show alert
        item.editMode = false; // Assuming there's a property named editMode in your item object
        alert('Please check the field.');
    } else {
        // If both inputs have data, disable the inputs
        item.editMode = false; // Assuming there's a property named editMode in your item object
    }

    // Auto-reset after 5 seconds
    // setTimeout(() => {
    //     item.editMode = false;
    // }, 1000);
}

}

