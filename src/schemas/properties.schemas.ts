import * as yup from "yup";
import { SchemaOf } from "yup";
import { IAddressRequest } from "../interfaces/properties";

const adressSchema: SchemaOf<IAddressRequest> = yup.object().shape({
  district: yup.string().required(),
  zipCode: yup.string().required().max(8, "the limit is 8 digits"),
  number: yup.string(),
  city: yup.string().required(),
  state: yup.string().required().max(2, "the limit is 2 digits"),
});

export { adressSchema };
