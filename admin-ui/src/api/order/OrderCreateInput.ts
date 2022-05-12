import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderCreateInput = {
  productid?: ProductWhereUniqueInput | null;
  userid?: UserWhereUniqueInput | null;
};
