import { Product } from "../product/Product";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  productid?: Product | null;
  updatedAt: Date;
  userid?: User | null;
};
