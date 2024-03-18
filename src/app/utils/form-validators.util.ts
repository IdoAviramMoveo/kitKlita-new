import {
  Validators,
  ValidatorFn,
  AbstractControl,
  FormGroup,
  FormControl,
} from '@angular/forms';

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

export function buildFormControls(fields) {
  const group = {};

  fields.forEach((field) => {
    if (field.group && field.fields) {
      const subGroup = {};
      field.fields.forEach((subField) => {
        subGroup[subField.name] = createControl(subField);
      });
      group[field.group] = new FormGroup(subGroup);
    } else {
      group[field.name] = createControl(field);
    }
  });

  return group;
}

function createControl(field) {
  let validators = [Validators.required];
  if (field.validationRules) {
    validators = validators.concat(getValidators(field.validationRules));
  }
  return new FormControl('', Validators.compose(validators));
}

function getValidators(rules) {
  const validators = [];
  rules.forEach((rule) => {
    switch (rule) {
      case 'email':
        validators.push(Validators.email);
        break;
      case 'hebrew':
        validators.push(hebrewCharactersValidator());
        break;
      case 'english':
        validators.push(englishCharactersValidator());
        break;
      case 'year':
        validators.push(yearValidator());
        break;
      case 'phoneNumber':
        validators.push(phoneNumberValidator());
        break;
      case 'israeliID':
        validators.push(israeliIDValidator());
        break;
      case 'zipCode':
        validators.push(zipCodeValidator());
        break;
    }
  });
  return validators;
}
