import { FieldType } from '../enums/field-types.enum';

export interface FormOption {
  value: string | boolean | number;
  display: string;
  image?: string;
  selectedImage?: string;
}

export interface FormField {
  name: string;
  type: FieldType;
  image?: string;
  label: string;
  options?: FormOption[];
  errorMessage?: string;
  validationRules?: string[];
}

export interface FormGroupFields {
  group?: string;
  fields: FormField[];
}
