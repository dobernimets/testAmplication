import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  nameProduct?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
};
