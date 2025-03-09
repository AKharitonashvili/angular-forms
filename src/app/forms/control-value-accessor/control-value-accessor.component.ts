import { Component } from '@angular/core';
import { CustomInputComponent } from './custom-input/custom-input.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-control-value-accessor',
  imports: [CustomInputComponent, ReactiveFormsModule],
  templateUrl: './control-value-accessor.component.html',
  styleUrl: './control-value-accessor.component.scss',
})
export class ControlValueAccessorComponent {
  form = new FormGroup({
    customControl: new FormControl('', Validators.required),
    selectControl: new FormControl('', Validators.required),
  });

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted successfully');
    } else {
      console.error('Form is invalid');
    }
  }
}
