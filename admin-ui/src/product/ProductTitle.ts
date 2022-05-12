import { Product as TProduct } from "../api/product/Product";

export const PRODUCT_TITLE_FIELD = "nameProduct";

export const ProductTitle = (record: TProduct): string => {
  return record.nameProduct || record.id;
};
