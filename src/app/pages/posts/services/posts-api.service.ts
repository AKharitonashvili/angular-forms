import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Posts } from '../store/posts.model';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsApiService {
  readonly #http = inject(HttpClient);

  getAllPosts(): Observable<Posts[]> {
    return this.#http
      .get<Posts[]>('https://jsonplaceholder.typicode.com/posts')
      .pipe(delay(150));
  }

  submitPost(body: Posts) {
    return this.#http
      .post<Posts[]>('https://jsonplaceholder.typicode.com/posts', body)
      .pipe(delay(150));
  }
}
