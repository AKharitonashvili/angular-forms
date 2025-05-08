import { Component, output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AddPostsForm, AddPostsValue } from '../../interfaces/posts.interfaces';

@Component({
  selector: 'app-posts-add',
  imports: [ReactiveFormsModule],
  templateUrl: './posts-add.component.html',
  styleUrl: './posts-add.component.scss',
  host: {
    class: 'flex flex-col border-neutral-500 border p-4',
  },
})
export class PostsAddComponent {
  formGroup: FormGroup<AddPostsForm> = new FormGroup<AddPostsForm>({
    title: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
    body: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required, Validators.minLength(4)],
    }),
  });

  onSubmit = output<AddPostsValue>();

  onSubmitHandler() {
    if (this.formGroup.valid) {
      this.onSubmit.emit(this.formGroup.getRawValue());
    }
  }
}
