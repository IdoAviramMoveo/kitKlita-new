import { FormGroup } from "@angular/forms";
import { ComponentType } from '@angular/cdk/portal';

export interface StepProp {
    component: ComponentType<any>;
    formGroup: {formGroup:FormGroup};
  }