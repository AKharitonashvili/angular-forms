import { inject, Injectable } from '@angular/core';
import { PostsStore } from '../store/posts.store';

@Injectable()
export class PostsService {
  readonly postsStore = inject(PostsStore);

  constructor() {
    this.postsStore.loadAllPosts();
  }
}
