export class MenuItem {
    editMode: boolean;
    constructor(
      public id: number,
      public name: string,
      public price: number,
      public canteenId: number,
      public date: Date
    ) {}
  }