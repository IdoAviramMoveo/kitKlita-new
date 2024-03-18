import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { stepTwoFields } from '../../data/step-forms.data';
import { FieldType } from '../../enums/field-types.enum';
import { FormField, FormGroupFields } from '../../models/form-fields.model';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss',
})
export class StepTwoComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  FieldType = FieldType;
  fields = stepTwoFields;
  finishedTyping = new Map<string, boolean>();

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  selectOption(fieldName: string, value: any) {
    this.formGroup.get(fieldName).setValue(value);
  }

  isSelected(fieldName: string, value: any): boolean {
    return this.formGroup.get(fieldName).value === value;
  }

  onFieldBlur(fieldName: string): void {
    this.finishedTyping.set(fieldName, true);
  }

  shouldDisplayField(field: FormField | FormGroupFields): boolean {
    if (!('displayCondition' in field) || !field.displayCondition) {
      return true;
    }
    const condition = field.displayCondition;
    const finishedTyping = this.finishedTyping.get(condition.dependsOn);

    console.log(condition);
    if (!finishedTyping) {
      return false;
    }
    const dependentControlValue = this.formGroup.get(
      condition.dependsOn
    )?.value;
    if (condition.notEquals !== undefined) {
      return condition.notEquals
        ? dependentControlValue !== condition.value
        : dependentControlValue === condition.value;
    }
    return dependentControlValue === condition.value;
  }

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }

  onPrev() {
    this.prevStep.emit();
  }
}
