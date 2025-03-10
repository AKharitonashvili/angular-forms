import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LongFormComponent } from './long-form/long-form/long-form.component';

@Component({
  selector: 'app-control-value-accessor',
  standalone: true,
  imports: [ReactiveFormsModule, LongFormComponent],
  template: `
    <div class="w-full max-x-[25rem]">
      <h1>Parent Form</h1>
      <form [formGroup]="parentForm" (ngSubmit)="onSubmit()">
        <app-long-form formControlName="longForm"></app-long-form>
        <button type="submit">Submit</button>
      </form>
    </div>
  `,
})
export class ControlValueAccessorComponent {
  parentForm = new FormGroup({
    longForm: new FormControl(),
  });

  ngOnInit() {
    this.parentForm.valueChanges.subscribe((values) => {
      console.log(values);
    });
  }

  onSubmit() {
    if (this.parentForm.valid) {
      console.log('Form Submitted:', this.parentForm.value);
    } else {
      console.log('Form is not valid');
    }
  }
}
