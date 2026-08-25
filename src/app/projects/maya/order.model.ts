// order.model.ts
export class Order {
  constructor(
    public menuItemId: number,
    public pickupTime: Date,
    public studentName: string,
    public quantity: number,
    public totalPrice: number // Include totalPrice parameter
  ) {}
}
