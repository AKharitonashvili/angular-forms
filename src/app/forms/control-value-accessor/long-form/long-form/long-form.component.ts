import { Component, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

@Component({
  selector: 'app-long-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LongFormComponent),
      multi: true,
    },
  ],
  template: `
    <form [formGroup]="form">
      <input formControlName="date" placeholder="Date" />
      <input formControlName="height" placeholder="Height" />
      <input formControlName="weight" placeholder="Weight" />
      <input formControlName="waist" placeholder="Waist" />
      <input formControlName="bloodPressure" placeholder="Blood Pressure" />
    </form>
  `,
})
export class LongFormComponent implements ControlValueAccessor {
  form: FormGroup;
  onTouched: () => void = () => {};
  onChange: (value: any) => void = () => {};

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      date: ['', Validators.required],
      height: ['', Validators.required],
      weight: ['', Validators.required],
      waist: ['', Validators.required],
      bloodPressure: ['', Validators.required],
    });

    this.form.valueChanges.subscribe((value) => {
      this.onChange(value);
      this.onTouched();
    });
  }

  writeValue(value: any): void {
    if (value) {
      const defaultValue = {
        date: '',
        height: '',
        weight: '',
        waist: '',
        bloodPressure: '',
      };
      this.form.setValue({ ...defaultValue, ...value }, { emitEvent: false });
    } else {
      this.form.reset();
    }
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (isDisabled) {
      this.form.disable();
    } else {
      this.form.enable();
    }
  }
}
