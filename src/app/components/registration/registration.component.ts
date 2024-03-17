import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stepOneFields, stepTwoFields } from '../../data/step-forms.data';
import { UserType } from '../../data/enums.data';

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

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const type = params['userType'];
      if (type && Object.values(UserType).includes(type as UserType)) {
        this.userType = type;
        console.log(this.userType);
        this.initializeForm();
      } else {
        this.router.navigate(['/registration/general']);
      }
    });
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      stepOne: this.fb.group(this.buildFormControls(this.stepOneFields)),
      stepTwo: this.fb.group(this.buildFormControls(this.stepTwoFields)),
    });
  }

  initializeFormBasedOnUserType(userType: string) {
    const type = UserType[userType as keyof typeof UserType];

    switch (type) {
      case UserType.General:
        break;
      case UserType.Intern:
        break;
      case UserType.Volunteer:
        break;
      case UserType.Independent:
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
