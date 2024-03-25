import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import {
  isFormArrayField,
  isFormGroupFields,
} from '../../../utils/form-validators.util';
import { previousJobsFields } from '../../../data/step-forms.data';
import { FieldType } from '../../../enums/field-types.enum';
import { ConfirmDialogComponent } from '../../confirm-dialog/confirm-dialog.component';
@Component({
  selector: 'app-previous-jobs-step',
  templateUrl: './previous-jobs-step.component.html',
  styleUrl: './previous-jobs-step.component.scss',
})
export class PreviousJobsStepComponent implements OnInit {
  @Input() formGroup: FormGroup;
  @Output() nextStep = new EventEmitter<void>();
  @Output() prevStep = new EventEmitter<void>();

  FieldType = FieldType;
  fields = previousJobsFields;
  workplaceFields: any[] = [];
  recommenderFields: any[] = [];

  constructor(private fb: FormBuilder, private dialog: MatDialog) {}

  ngOnInit() {
    console.log(this.formGroup.value);
    this.initializeForm();
    this.extractFormFields();
  }

  initializeForm() {
    this.formGroup = this.fb.group({
      workplaces: this.fb.array([this.createWorkplace()]),
    });
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

  extractFormFields() {
    const workplacesConfig = previousJobsFields.find(
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

  removeRecommenderWithConfirmation(
    workplaceIndex: number,
    recommenderIndex: number
  ): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '45%',
      height: '360px',
      maxWidth: '800px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeRecommender(workplaceIndex, recommenderIndex);
      }
    });
  }

  removeWorkplaceWithConfirmation(index: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '45%',
      height: '360px',
      maxWidth: '800px',
      data: {},
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.removeWorkplace(index);
      }
    });
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
