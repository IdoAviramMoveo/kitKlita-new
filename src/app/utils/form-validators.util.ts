import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormControl,
} from '@angular/forms';
import { FormField, FormGroupFields } from '../models/form-fields.model';

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

// export function buildFormControls(fields) {
//   const group = {};

//   fields.forEach((field) => {
//     if (field.group && field.fields) {
//       const subGroup = {};
//       field.fields.forEach((subField) => {
//         subGroup[subField.name] = createControl(subField);
//       });
//       group[field.group] = new FormGroup(subGroup);
//     } else {
//       group[field.name] = createControl(field);
//     }
//   });

//   return group;
// }

// function createControl(field) {
//   let validators = [Validators.required];
//   if (field.validationRules) {
//     validators = validators.concat(getValidators(field.validationRules));
//   }
//   return new FormControl('', Validators.compose(validators));
// }

// function getValidators(rules) {
//   const validators = [];
//   rules.forEach((rule) => {
//     switch (rule) {
//       case 'email':
//         validators.push(Validators.email);
//         break;
//       case 'hebrew':
//         validators.push(hebrewCharactersValidator());
//         break;
//       case 'english':
//         validators.push(englishCharactersValidator());
//         break;
//       case 'year':
//         validators.push(yearValidator());
//         break;
//       case 'phoneNumber':
//         validators.push(phoneNumberValidator());
//         break;
//       case 'israeliID':
//         validators.push(israeliIDValidator());
//         break;
//       case 'zipCode':
//         validators.push(zipCodeValidator());
//         break;
//     }
//   });
//   return validators;
// }

function isFormField(field: FormField | FormGroupFields): field is FormField {
  return 'type' in field;
}

export function buildFormControls(fields: (FormField | FormGroupFields)[]): {
  [key: string]: AbstractControl;
} {
  const group: { [key: string]: AbstractControl } = {};

  fields.forEach((field) => {
    if ('group' in field && field.fields) {
      const subGroup: { [key: string]: AbstractControl } = {};
      field.fields.forEach((subField) => {
        if (isFormField(subField)) {
          subGroup[subField.name] = createControl(subField);
        }
      });
      group[field.group!] = new FormGroup(subGroup);
    } else if (isFormField(field)) {
      group[field.name] = createControl(field);
    }
  });

  // Apply conditional logic after all fields have been initialized
  fields.forEach((field) => {
    if (isFormField(field) && field.displayCondition) {
      handleDisplayCondition(field, group);
    }
  });

  return group;
}

function createControl(field: FormField): FormControl {
  let validators: ValidatorFn[] = field.required ? [Validators.required] : [];

  if (field.validationRules) {
    validators = validators.concat(getValidators(field.validationRules));
  }

  return new FormControl('', Validators.compose(validators));
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

function handleDisplayCondition(
  field: FormField,
  group: { [key: string]: AbstractControl }
) {
  // This example assumes `displayCondition` has been properly typed and exists in FormField
  const condition = field.displayCondition!;
  const dependsOnControl = group[condition.dependsOn];

  if (dependsOnControl) {
    dependsOnControl.valueChanges.subscribe(() => {
      // Implement your conditional logic here, adjusting visibility/validity as needed
      // This is a placeholder for where you would adjust the form control based on condition
    });
  }
}
