import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { stepOneFields } from '../../data/step-forms.data';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss',
})
export class StepOneComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() nextStep = new EventEmitter<void>();

  fields = stepOneFields;
  dropdowns: { [key: string]: boolean } = {};

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

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }
}
