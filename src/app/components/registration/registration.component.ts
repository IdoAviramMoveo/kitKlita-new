import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { stepOneFields, stepTwoFields } from '../../data/step-forms.data';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  userType: string;

  stepOneFields = stepOneFields;
  stepTwoFields = stepTwoFields;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.firstChild.params.subscribe((params) => {
      this.userType = params['userType'];
      console.log(this.userType);

      this.initializeFormBasedOnUserType(this.userType);

      this.initializeForm();
    });
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      stepOne: this.fb.group(this.buildFormControls(this.stepOneFields)),
      stepTwo: this.fb.group(this.buildFormControls(this.stepTwoFields)),
    });
  }

  initializeFormBasedOnUserType(userType: string) {
    switch (userType) {
      case 'user':
        break;
      case 'stager':
        break;
      default:
    }
  }

  buildFormControls(fields) {
    const group = {};
    fields.forEach((field) => {
      group[field.name] = [''];
    });
    return group;
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
