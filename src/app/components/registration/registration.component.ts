import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { stepOneFields, stepTwoFields } from '../../data/step-forms.data';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;

  // Import the metadata
  stepOneFields = stepOneFields;
  stepTwoFields = stepTwoFields;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registrationForm = this.fb.group({
      stepOne: this.fb.group(this.buildFormControls(this.stepOneFields)),
      stepTwo: this.fb.group(this.buildFormControls(this.stepTwoFields)),
    });
  }

  buildFormControls(fields) {
    const group = {};
    fields.forEach((field) => {
      group[field.name] = ['']; // Initialize as an empty value or add validators here
    });
    return group;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    // Submit logic here
  }
}
