import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MenuItem } from 'src/app/projects/maya/menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  // 🔥 Internal state
  private editedMenuItems: MenuItem[] = [];

  // 🔥 Observable stream
  private editedMenuItemsSubject = new BehaviorSubject<MenuItem[]>([]);

  // 🔥 Public observable (this is what you subscribe to)
  editedMenuItems$ = this.editedMenuItemsSubject.asObservable();

  constructor() {}

  // ✅ Get current value (sync)
  getEditedMenuItems(): MenuItem[] {
    return this.editedMenuItems;
  }

  // ✅ Update whole list
  updateEditedMenuItems(items: MenuItem[]): void {
    this.editedMenuItems = items;
    this.editedMenuItemsSubject.next(this.editedMenuItems);
  }

  // ✅ Add or update single item
  addEditedItem(item: MenuItem): void {
    const index = this.editedMenuItems.findIndex(i => i.id === item.id);

    if (index !== -1) {
      this.editedMenuItems[index] = item;
    } else {
      this.editedMenuItems.push(item);
    }

    this.editedMenuItemsSubject.next(this.editedMenuItems);
  }

  // ✅ Clear all
  clearEditedItems(): void {
    this.editedMenuItems = [];
    this.editedMenuItemsSubject.next(this.editedMenuItems);
  }
}