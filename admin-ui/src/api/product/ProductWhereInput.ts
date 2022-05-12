import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type ProductWhereInput = {
  id?: StringFilter;
  nameProduct?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
