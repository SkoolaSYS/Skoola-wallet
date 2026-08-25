import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { MenuItem } from '../menu-item.model';
import { MenuService } from 'src/app/services/menu.Services';
import { Order } from '../order.model';
import { Services } from '../../../services/service';
import { Router } from '@angular/router';
import { Utility } from 'src/utils';
import { DateAdapter } from '@angular/material/core';
import { NgbDate,NgbDateStruct, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';

const equals = (one: NgbDateStruct, two: NgbDateStruct) =>
  one && two && two.year === one.year && two.month === one.month && two.day === one.day;

const before = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day < two.day : one.month < two.month : one.year < two.year;

const after = (one: NgbDateStruct, two: NgbDateStruct) =>
  !one || !two ? false : one.year === two.year ? one.month === two.month ? one.day === two.day
    ? false : one.day > two.day : one.month > two.month : one.year > two.year;

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  isMerchant: boolean = false;
  menuItems: MenuItem[] = [];
  menuItems1: any[];
  order: Order = new Order(1, new Date(), '', 1, 0); // Initialize menuItemId to null
  student: any;
  student1: any;
  currencyType: any;
  confirmedOrders: Order[] = [];
  currentDate: Date;
  editedMenuItems: any[] = [];
  hoveredDate: NgbDateStruct;
  defaultDate: NgbDate;

  fromDate: NgbDateStruct;
  toDate: NgbDateStruct;
  

  _datesSelected:NgbDateStruct[]=[]; 
  @Input()
  set datesSelected(value:NgbDateStruct[])  
  {
     this._datesSelected=value;
  }
  get datesSelected():NgbDateStruct[]
  {
    return this._datesSelected?this._datesSelected:[];
  }
  @Output() datesSelectedChange=new EventEmitter<NgbDateStruct[]>();
  
  constructor(
    private fb: FormBuilder,
    private menuService: MenuService,
    private dataService: DataService,
    private service: Services,
    private router: Router,
    private calendar: NgbCalendar,
    private dateAdapter: DateAdapter<Date>
  ) {
    this.currentDate = new Date();
    this.dateAdapter.setLocale('en-US');

    // Define dummy data for students
    // this.student = [
    //   { id: 1, name: 'John Doe' },
    //   { id: 2, name: 'Jane Smith' },
    //   { id: 3, name: 'Michael Johnson' }
    // ];

    // Define dummy data for edited menu items
  }

  async ngOnInit() {
    this.menuService.editedMenuItems$.subscribe((menuItems) => {
      this.editedMenuItems = menuItems;
    });

    const parents: any = await this.service.currentUser;
    if (parents && parents.id) {
      this.service.getChildsData(parents.id.toString()).subscribe(message => {
        this.student = message;
        console.log(this.student);
      });
    }
    // this.menuItems = this.dataService.getMenuItems();
    this.menuItems1 = this.dataService.getMenuItems();
    // this.menuItems1.push(
    //   new MenuItem(1, 'nasi lemak', 5.99, 1, new Date()),
    //   new MenuItem(2, 'nasi ayam', 8.99, 1, new Date()),
    //   new MenuItem(3, 'mee goreng', 4.99, 1, new Date())
    // );
    this.menuItems1 = [
      { id: 1, name: 'nasi lemak',price: 5.99,quantity: 1,date: new Date() },
      { id: 2, name: 'nasi ayam',price: 8.99,quantity: 2,date: new Date()  },
      { id: 3, name: 'nasi goreng',price: 4.99,quantity: 3,date: new Date()  }
    ];

    this.confirmedOrders = JSON.parse(localStorage.getItem('confirmedOrders')) || [];

    this.service.getAccountBalance().subscribe(
      (res: any) => {
        this.currencyType = res[0].account.type.currency.symbol;
      },
      (err) => {
        Utility.log(err);
      }
    );

    this.service.currentUser.then(parents => {
      if (parents && parents.id) {
        this.service.getChildsData(parents.id.toString()).subscribe((message) => {
          this.student1 = message;
        });
      }
    });
    // Initialize menuItemId to null and studentName to the first student's name
    this.order.studentName = this.student;
    this.order.menuItemId =this.order ? this.menuItems1[0].name: '';

    const today = this.calendar.getToday();
    const tomorrow = this.calendar.getNext(today, 'd', 1);
    this.defaultDate = new NgbDate(tomorrow.year, tomorrow.month, tomorrow.day);
   
  }

  // quantityChanged(): void {
  //   console.log('Captured Quantity:', this.order.quantity);
  // }
  onDateSelection(event:any,date: NgbDateStruct) {

    event.target.parentElement.blur();  //make that not appear the outline
    if (!this.fromDate && !this.toDate) {
      if (event.ctrlKey==true)  //If is CrtlKey pressed
        this.fromDate = date;
      else
        this.addDate(date);

      this.datesSelectedChange.emit(this.datesSelected);

    } else if (this.fromDate && !this.toDate && after(date, this.fromDate)) {
      this.toDate = date;
      this.addRangeDate(this.fromDate,this.toDate);
      this.fromDate=null;
      this.toDate=null;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }addDate(date:NgbDateStruct)
  {
      let index=this.datesSelected.findIndex(f=>f.day==date.day && f.month==date.month && f.year==date.year);
      if (index>=0)       //If exist, remove the date
        this.datesSelected.splice(index,1);
      else   //a simple push
        this.datesSelected.push(date);
    }
    addRangeDate(fromDate:NgbDateStruct,toDate:NgbDateStruct)
    {
        //We get the getTime() of the dates from and to
        let from=new Date(fromDate.year+"-"+fromDate.month+"-"+fromDate.day).getTime();
        let to=new Date(toDate.year+"-"+toDate.month+"-"+toDate.day).getTime();
        for (let time=from;time<=to;time+=(24*60*60*1000)) //add one day
        {
            let date=new Date(time);
            //javascript getMonth give 0 to January, 1, to February...
            this.addDate({year:date.getFullYear(),month:date.getMonth()+1,day:date.getDate()});
        }   
        this.datesSelectedChange.emit(this.datesSelected);
    }
    //return true if is selected
    isDateSelected(date:NgbDateStruct)
    {
        return (this.datesSelected.findIndex(f=>f.day==date.day && f.month==date.month && f.year==date.year)>=0);
    }
  isHovered = date => this.fromDate && !this.toDate && this.hoveredDate && after(date, this.fromDate) && before(date, this.hoveredDate);
  isInside = date => after(date, this.fromDate) && before(date, this.toDate);
  isFrom = date => equals(date, this.fromDate);
  isTo = date => equals(date, this.toDate);

  placeOrder(id: number): void {
    if (!this.order.menuItemId) { // Check if menuItemId is null
      console.log('Please select a menu item before placing the order.');
      return;
    }

    this.order.totalPrice = this.calculateTotalPrice();
    this.order.studentName = this.student;

    console.log('Placing Order:', this.order);
    console.log('Total:', this.order.totalPrice * this.order.quantity);

    this.confirmedOrders.push({ ...this.order });
    localStorage.setItem('confirmedOrders', JSON.stringify(this.confirmedOrders));
  }

  editOrder(itemId: number): void {
    console.log('Editing Order:', itemId);
  }

  deleteOrder(itemId: number): void {
    localStorage.setItem('confirmedOrders', JSON.stringify(this.confirmedOrders));
    console.log('Deleting Order:', itemId);

    const index = this.confirmedOrders.findIndex(order => order.menuItemId === itemId); // Changed to menuItemId
    if (index !== -1) {
      this.confirmedOrders.splice(index, 1);
    }
  }

  onChildSelected(): void {
    if (this.student && this.student.length > 0) {
      this.order.studentName = this.student[0].name;
      console.log('Selected Child:', this.order.studentName);
    } else {
      console.error('No students found.');
    }
  }
  
  onMenuItemSelected(): void {
    console.log('Order object before selecting menu item:', this.order);
    console.log('Selected Menu Item ID:', this.order.menuItemId);
}
 quantityChanged(): void {
  this.order.totalPrice = this.calculateTotalPrice();
  console.log('Captured Quantity:', this.order.quantity);
}

private calculateTotalPrice(): number {
  const selectedItem = this.menuItems1.find(item => item.id === this.order.menuItemId);
  return selectedItem ? selectedItem.price * this.order.quantity : 0;
}

isDateDisabled(date: NgbDateStruct): boolean {
  const today = new Date();
  const selectedDate = new Date(date.year, date.month - 1, date.day - 1); // Month is 0-indexed in JavaScript Date objects
  return selectedDate < today;
}

isBefore(date1: NgbDateStruct, date2: NgbDateStruct): boolean {
  if (date1.year < date2.year) {
    return true;
  } else if (date1.year > date2.year) {
    return false;
  } else {
    if (date1.month < date2.month) {
      return true;
    } else if (date1.month > date2.month) {
      return false;
    } else {
      return date1.day < date2.day;
    }
  }
}

}
