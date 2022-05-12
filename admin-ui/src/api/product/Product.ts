import { Order } from "../order/Order";

export type Product = {
  createdAt: Date;
  id: string;
  nameProduct: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
