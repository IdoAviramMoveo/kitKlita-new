import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { stepTwoFields } from '../../data/step-forms.data';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss',
})
export class StepTwoComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  fields = stepTwoFields;

  ngOnInit() {}

  selectOption(fieldName: string, value: any) {
    this.formGroup.get(fieldName).setValue(value);
  }

  isSelected(fieldName: string, value: any): boolean {
    return this.formGroup.get(fieldName).value === value;
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
