import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ProductTitle } from "../product/ProductTitle";
import { UserTitle } from "../user/UserTitle";

export const OrderEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="product.id"
          reference="Product"
          label="productid"
        >
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="userid">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
