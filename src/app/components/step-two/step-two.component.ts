import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { stepTwoFields } from '../../data/step-forms.data';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrl: './step-two.component.scss',
})
export class StepTwoComponent implements OnInit {
  formGroup: FormGroup;
  fields = stepTwoFields;

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit() {
    this.formGroup = this.fb.group(this.buildFormControls(this.fields));
  }

  buildFormControls(fields) {
    const group = {};
    fields.forEach((field) => {
      group[field.name] = [''];
    });
    return group;
  }

  selectOption(fieldName: string, value: any) {
    this.formGroup.get(fieldName).setValue(value);
  }

  isSelected(fieldName: string, value: any): boolean {
    return this.formGroup.get(fieldName).value === value;
  }

  onNext() {
    if (this.formGroup.valid) {
      this.router.navigate(['/registration/step-three']);
    }
  }
}
