import { Component, OnInit } from '@angular/core';
import { KopenService } from 'src/app/services/kopen.service';

@Component({
  selector: 'app-kopen',
  templateUrl: './kopen.component.html',
  styleUrls: ['./kopen.component.scss']
})
export class KopenComponent implements OnInit {

  items: any[] = [];
  cart: any[] = [];
  selectedInmate = '';

  requestName = '';
  requestDesc = '';

  constructor(private service: KopenService) {}

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems() {
    this.service.getItems().subscribe((res: any) => {
      this.items = res;
    });
  }

  addToCart(item: any) {
    const exist = this.cart.find(i => i.id === item.id);
    if (exist) {
      exist.qty++;
    } else {
      this.cart.push({ ...item, qty: 1 });
    }
  }

  removeFromCart(item: any) {
    this.cart = this.cart.filter(i => i.id !== item.id);
  }

  getTotal() {
    return this.cart.reduce((sum, i) => sum + (i.price * i.qty), 0);
  }

  checkout() {
    const order = {
      inmateId: this.selectedInmate,
      items: this.cart,
      total: this.getTotal()
    };

    this.service.createOrder(order).subscribe(() => {
      alert('Order placed successfully');
      this.cart = [];
    });
  }

  requestItem() {
    const data = {
      itemName: this.requestName,
      description: this.requestDesc
    };

    this.service.requestItem(data).subscribe(() => {
      alert('Request sent');
      this.requestName = '';
      this.requestDesc = '';
    });
  }
}