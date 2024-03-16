import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { stepOneFields } from '../../data/step-forms.data';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrl: './step-one.component.scss',
})
export class StepOneComponent implements OnInit {
  formGroup: FormGroup;
  fields = stepOneFields;

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

  onNext() {
    if (this.formGroup.valid) {
      this.router.navigate(['/registration/step-two']);
    }
  }
}
