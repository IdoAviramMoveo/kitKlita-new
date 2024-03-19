import { FieldType } from '../enums/field-types.enum';

interface FormCondition {
  dependsOn: string;
  value?: any;
  notEquals?: boolean;
}

interface FormEnablementCondition extends FormCondition {
  enableIfTrue: boolean;
}

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
  required?: boolean;
  displayCondition?: FormCondition;
  enableCondition?: FormEnablementCondition;
}

export interface FormGroupFields {
  group?: string;
  fields: FormField[];
}

export interface FormArrayField {
  name: string;
  type: FieldType.FORM_ARRAY;
  arrayFields: Array<FormField | FormGroupFields | FormArrayField>;
}
