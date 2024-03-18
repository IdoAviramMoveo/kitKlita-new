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
  currentStep: number = 1;

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
    }); // TODO: Add validators and type for each step
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

  goToNextStep() {
    if (this.currentStep < 6) {
      this.currentStep++;
    }
  }

  goToPreviousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  onSubmit() {
    console.log(this.registrationForm.value);
  }
}
