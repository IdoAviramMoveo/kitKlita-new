import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  buildFormControls,
  isFormArrayField,
  isFormGroupFields,
} from '../../utils/form-validators.util';
import { stepThreeFields } from '../../data/step-forms.data';
import { FieldType } from '../../enums/field-types.enum';
import { FormArrayField } from '../../models/form-fields.model';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrl: './step-three.component.scss',
})
export class StepThreeComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  FieldType = FieldType;
  fields = stepThreeFields;
  workplaceFields: any[] = [];
  recommenderFields: any[] = [];

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
    this.extractFormFields();
  }

  initializeForm() {
    this.formGroup = this.fb.group({
      workplaces: this.fb.array([this.createWorkplace()]),
    });

    console.log(this.formGroup.value);
  }

  extractFormFields() {
    const workplacesConfig = stepThreeFields.find(
      (field) => field.name === 'workplaces'
    );

    if (isFormArrayField(workplacesConfig)) {
      const workplaceDetailsConfig =
        workplacesConfig.arrayFields.find(isFormGroupFields);
      if (workplaceDetailsConfig) {
        this.workplaceFields = workplaceDetailsConfig.fields;
      }

      const recommendersConfig = workplacesConfig.arrayFields.find(
        (field) => isFormArrayField(field) && field.name === 'recommenders'
      );
      if (isFormArrayField(recommendersConfig)) {
        const recommenderDetailsConfig =
          recommendersConfig.arrayFields.find(isFormGroupFields);
        if (recommenderDetailsConfig) {
          this.recommenderFields = recommenderDetailsConfig.fields;
        }
      }
    }
  }

  createWorkplace(): FormGroup {
    return this.fb.group({
      workplaceDetails: this.fb.group({
        companyName: ['', Validators.required],
        position: ['', Validators.required],
        reasonEnd: ['', Validators.required],
      }),
      recommenders: this.fb.array([]),
    });
  }

  get workplaces(): FormArray {
    return this.formGroup.get('workplaces') as FormArray;
  }

  getRecommenders(workplaceIndex: number): FormArray {
    return this.workplaces.at(workplaceIndex).get('recommenders') as FormArray;
  }

  addWorkplace(): void {
    const newWorkplace = this.fb.group({
      workplaceDetails: this.fb.group({
        companyName: ['', Validators.required],
        position: ['', Validators.required],
        reasonEnd: ['', Validators.required],
      }),
      recommenders: this.fb.array([]),
    });

    this.workplaces.push(newWorkplace);
    console.log(this.formGroup.value);
  }

  removeWorkplace(index: number): void {
    this.workplaces.removeAt(index);
  }

  addRecommender(workplaceIndex: number): void {
    const recommenders = this.getRecommenders(workplaceIndex);
    const newRecommender = this.fb.group({
      recommenderName: [''],
      recommenderPosition: [''],
      recommenderPhone: [''],
    });

    recommenders.push(newRecommender);
  }

  removeRecommender(workplaceIndex: number, recommenderIndex: number): void {
    const recommenders = this.getRecommenders(workplaceIndex);
    recommenders.removeAt(recommenderIndex);
  }

  getControlValidation(
    workplaceIndex: number,
    group: string,
    fieldName: string,
    recommenderIndex?: number
  ) {
    let controlPath = ['workplaces', workplaceIndex];

    if (group === 'workplaceDetails') {
      controlPath.push(group, 'fields', fieldName);
    } else if (group === 'recommenders' && recommenderIndex !== undefined) {
      controlPath.push(group, recommenderIndex, 'fields', fieldName);
    } else {
      console.warn('Unexpected form structure for validation path.');
      return null;
    }

    const control = this.formGroup.get(controlPath);
    return control || null;
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
