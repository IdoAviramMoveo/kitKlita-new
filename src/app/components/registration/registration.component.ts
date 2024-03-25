import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
  candidateQuestionnaireFields,
  personalInformationFields,
  previousJobsFields,
} from '../../data/step-forms.data';
import { UserType } from '../../enums/user-types.enum';
import { buildFormControls } from '../../utils/form-validators.util';
import {
  FormArrayField,
  FormField,
  FormGroupFields,
} from '../../models/form-fields.model';
import { CandidateQuestionnaireStepComponent } from '../steps/candidate-questionnaire-step/candidate-questionnaire-step.component';
import { PersonalInformationStepComponent } from '../steps/personal-Information-step/personal-information-step.component';
import { PreviousJobsStepComponent } from '../steps/previous-jobs-step/previous-jobs-step.component';
import { Step } from '../../enums/step-types.enum';
import { StepProp } from '../../models/steps.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})

export class RegistrationComponent implements OnInit {
  registrationForm: FormGroup;
  userType: string;
  currentStep: number = 1;
  FIRST_STEP: number = 1;
  steps: StepProp[];

  candidateQuestionnaireFields: FormField[] = candidateQuestionnaireFields;
  personalInformationFields: (FormField | FormGroupFields)[] = personalInformationFields;
  previousJobsFields: (FormField | FormGroupFields | FormArrayField)[] =
    previousJobsFields;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const type = params['userType'];
      if (type && Object.values(UserType).includes(type as UserType)) {
        this.userType = type;
        this.initializeForm();
        this.steps = [
          { component: CandidateQuestionnaireStepComponent, formGroup: {'formGroup' : this.registrationForm.get(Step.STEP_ONE) as FormGroup} },
          { component: PersonalInformationStepComponent, formGroup: {'formGroup' : this.registrationForm.get(Step.STEP_TWO) as FormGroup} },
          { component: PreviousJobsStepComponent, formGroup: {'formGroup' : this.registrationForm.get(Step.STEP_THREE) as FormGroup} }
        ];
      } else {
        this.router.navigate(['/registration/general']);
      }
    });
  }

  initializeForm() {
    this.registrationForm = this.fb.group({
      [Step.STEP_ONE]: this.fb.group(buildFormControls(this.candidateQuestionnaireFields)),
      [Step.STEP_TWO]: this.fb.group(buildFormControls(this.personalInformationFields)),
      [Step.STEP_THREE]: this.fb.group(buildFormControls(this.previousJobsFields)),
    });
  }

  initializeFormBasedOnUserType(userType: UserType) {
    switch (userType) {
      case UserType.GENERAL:
        break;
      case UserType.INTERN:
        break;
      case UserType.VOLUNTEER:
        break;
      case UserType.INDEPENDENT:
        break;
      default:
    }
  }

  buildFormControls(fields) {
    const group = {};
    fields.forEach((field) => {
      group[field.name] = ['', Validators.required];
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

  onSubmit() {}
}
