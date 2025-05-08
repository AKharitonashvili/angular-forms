import { FormControl } from '@angular/forms';

export interface AddPostsValue {
  title: string;
  body: string;
}

export interface AddPostsForm {
  title: FormControl<string>;
  body: FormControl<string>;
}
