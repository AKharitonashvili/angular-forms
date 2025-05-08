import { inject, Injectable } from '@angular/core';
import { PostsStore } from '../store/posts.store';
import { Posts } from '../store/posts.model';

@Injectable()
export class PostsService {
  readonly postsStore = inject(PostsStore);

  constructor() {
    this.postsStore.loadAllPosts();
  }

  submitPost(post: Posts): void {
    this.postsStore.submitPost(post);
  }
}
