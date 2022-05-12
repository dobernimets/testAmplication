import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  productid?: ProductWhereUniqueInput | null;
  userid?: UserWhereUniqueInput | null;
};
