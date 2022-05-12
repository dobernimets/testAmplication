import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  nameProduct?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
};
