// data.service.ts
import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() { }

  // Method to retrieve menu items from LocalStorage
  getMenuItems(): MenuItem[] {
    const storedMenuItems = localStorage.getItem('menuItems');
    return storedMenuItems ? JSON.parse(storedMenuItems) : [];
  }

  // Method to save menu items to LocalStorage
  saveMenuItems(menuItems: MenuItem[]): void {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }
}
