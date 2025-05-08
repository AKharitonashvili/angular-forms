import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LongFormComponent } from './long-form/long-form/long-form.component';

@Component({
  selector: 'app-control-value-accessor',
  standalone: true,
  imports: [ReactiveFormsModule, LongFormComponent],
  template: `
    <div class="flex justify-center items-center">
      <div class="w-full max-x-[25rem] flex flex-col gap-4 max-w-[400px]">
        <h1>Parent Form</h1>
        <form
          [formGroup]="parentForm"
          (ngSubmit)="onSubmit()"
          class="flex flex-col gap-4"
        >
          <app-long-form formControlName="longForm"></app-long-form>
          <button
            class="w-full bg-blue-500 text-white hover:bg-blue-400 px-4 py-2"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
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
