import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { candidateQuestionnaireFields } from '../../../data/step-forms.data';
import { FieldType } from '../../../enums/field-types.enum';
import { FormField, FormGroupFields } from '../../../models/form-fields.model';
import { TRANSLATIONS } from '../../../data/translations.data';

@Component({
  selector: 'app-candidate-questionnaire-step',
  templateUrl: './candidate-questionnaire-step.component.html',
  styleUrl: './candidate-questionnaire-step.component.scss',
})
export class CandidateQuestionnaireStepComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() nextStep = new EventEmitter<void>();

  FieldType = FieldType;
  fields = candidateQuestionnaireFields;
  dropdowns: { [key: string]: boolean } = {};
  translations = TRANSLATIONS;

  ngOnInit() {
    window.scrollTo(0, 0);
  }

  toggleDropdown(fieldName: string) {
    this.dropdowns[fieldName] = !this.dropdowns[fieldName];
  }

  selectOption(fieldName: string, value: any) {
    this.formGroup.get(fieldName).setValue(value);
    this.dropdowns[fieldName] = false;
  }

  getSelectedOptionDisplay(field: any): string | null {
    const selectedValue = this.formGroup.get(field.name).value;
    const selectedOption = field.options.find(
      (option) => option.value === selectedValue
    );
    return selectedOption ? selectedOption.display : null;
  }

  shouldDisplayField(field: FormField | FormGroupFields): boolean {
    if (!('displayCondition' in field) || !field.displayCondition) {
      return true;
    }

    const condition = field.displayCondition;
    const dependentControl = this.formGroup.get(condition.dependsOn);

    const hasValue =
      dependentControl &&
      dependentControl.value !== null &&
      dependentControl.value !== undefined &&
      dependentControl.value !== '';

    if (hasValue) {
      if (condition.notEquals !== undefined) {
        return condition.notEquals
          ? dependentControl.value !== condition.value
          : dependentControl.value === condition.value;
      }
      return dependentControl.value === condition.value;
    }

    return false;
  }

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }
}
