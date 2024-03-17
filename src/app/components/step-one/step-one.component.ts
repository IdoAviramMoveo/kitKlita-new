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

  ngOnInit() {}

  onNext() {
    if (this.formGroup.valid) {
      this.nextStep.emit();
    }
  }
}
