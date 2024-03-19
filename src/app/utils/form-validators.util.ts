import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormControl,
  FormArray,
} from '@angular/forms';
import {
  FormArrayField,
  FormField,
  FormGroupFields,
} from '../models/form-fields.model';

export function hebrewCharactersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^[\u0590-\u05FF\s]+$/i.test(control.value);
    return valid ? null : { invalidHebrewCharacters: { value: control.value } };
  };
}

export function englishCharactersValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const valid = /^[A-Za-z\s]+$/i.test(control.value);
    return valid
      ? null
      : { invalidEnglishCharacters: { value: control.value } };
  };
}

export function yearValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const isNumber = !isNaN(control.value);
    const valid = isNumber && parseInt(control.value, 10) <= 2024;
    return valid ? null : { invalidYear: { value: control.value } };
  };
}

export function phoneNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) return null;
    const isValidPhoneNumber = /^(05\d([-]{0,1})\d{7}|972-5\d-?\d{7})$/.test(
      control.value
    );
    return isValidPhoneNumber
      ? null
      : { invalidPhoneNumber: { value: control.value } };
  };
}

export function israeliIDValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) return null;
    const id = String(control.value).trim();
    if (id.length > 9 || isNaN(+id)) return { invalidID: true };

    let sum = 0,
      incNum;
    for (let i = 0; i < id.length; i++) {
      incNum = Number(id[i]) * ((i % 2) + 1);
      sum += incNum > 9 ? incNum - 9 : incNum;
    }
    return sum % 10 === 0 ? null : { invalidID: true };
  };
}

export function zipCodeValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    if (!control.value) return null;
    const isValidZipCode = /^\d{5}$|^\d{7}$/.test(control.value);
    return isValidZipCode ? null : { invalidZipCode: { value: control.value } };
  };
}

export function isFormField(
  field: FormField | FormGroupFields | FormArrayField
): field is FormField {
  return 'type' in field;
}

export function isFormGroupFields(field: any): field is FormGroupFields {
  return (
    field && typeof field === 'object' && 'group' in field && 'fields' in field
  );
}

export function isFormArrayField(
  field: FormField | FormGroupFields | FormArrayField
): field is FormArrayField {
  return 'arrayFields' in field;
}

export function buildFormControls(
  fields: (FormField | FormGroupFields | FormArrayField)[]
): { [key: string]: AbstractControl } {
  const group: { [key: string]: AbstractControl } = {};

  fields.forEach((field) => {
    if (isFormArrayField(field)) {
      const formArray = new FormArray(
        field.arrayFields.map((subField) => {
          if ('group' in subField && subField.fields) {
            const subGroup: { [key: string]: AbstractControl } = {};
            subField.fields.forEach((nestedField) => {
              if (isFormField(nestedField)) {
                subGroup[nestedField.name] = createControl(
                  nestedField,
                  subGroup
                );
              }
            });
            return new FormGroup(subGroup);
          } else if (isFormField(subField)) {
            return createControl(subField, {});
          }
        })
      );
      group[field.name] = formArray;
    } else if ('group' in field && field.fields) {
      const subGroup: { [key: string]: AbstractControl } = {};
      field.fields.forEach((subField) => {
        if (isFormField(subField)) {
          subGroup[subField.name] = createControl(subField, group);
        }
      });
      group[field.group!] = new FormGroup(subGroup);
    } else if (isFormField(field)) {
      group[field.name] = createControl(field, group);
    }
  });

  return group;
}

function createControl(
  field: FormField,
  group: { [key: string]: AbstractControl }
): FormControl {
  let validators: ValidatorFn[] = field.required ? [Validators.required] : [];

  if (field.validationRules) {
    validators = validators.concat(getValidators(field.validationRules));
  }

  const formControl = new FormControl(
    { value: '', disabled: field.enableCondition ? true : false },
    Validators.compose(validators)
  );

  if (field.enableCondition) {
    const condition = field.enableCondition;
    const dependsOnControl = group[condition.dependsOn];
    if (dependsOnControl) {
      dependsOnControl.valueChanges.subscribe((newValue) => {
        if (condition.enableIfTrue && newValue) {
          formControl.enable();
        } else {
          formControl.disable();
        }
      });
    }
  }

  return formControl;
}

function getValidators(rules: string[]): ValidatorFn[] {
  const validators: ValidatorFn[] = rules.map((rule) => {
    switch (rule) {
      case 'email':
        return Validators.email;
      case 'hebrew':
        return hebrewCharactersValidator();
      case 'english':
        return englishCharactersValidator();
      case 'year':
        return yearValidator();
      case 'phoneNumber':
        return phoneNumberValidator();
      case 'israeliID':
        return israeliIDValidator();
      case 'zipCode':
        return zipCodeValidator();
      default:
        return () => null;
    }
  });
  return validators;
}
