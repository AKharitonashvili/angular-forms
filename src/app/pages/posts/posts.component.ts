import { Component, inject, signal } from '@angular/core';
import { PostsStore } from './store/posts.store';
import { PostsService } from './services/posts.service';
import { PageEvent } from '@angular/material/paginator';
import { PAGE_LIMIT } from './consts/posts.consts';
import { PostsHistoryComponent } from './components/posts-history/posts-history.component';
import { PostsAddComponent } from './components/posts-add/posts-add.component';
import { AddPostsValue } from './interfaces/posts.interfaces';

@Component({
  selector: 'app-posts',
  imports: [PostsHistoryComponent, PostsAddComponent],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  providers: [PostsStore, PostsService],
  host: {
    class: 'flex flex-col gap-4',
  },
})
export class PostsComponent {
  readonly #postsService = inject(PostsService);

  readonly pageLimit = signal<number>(PAGE_LIMIT);
  readonly page = signal<number>(0);

  postsState = this.#postsService.postsStore;

  pageChanged(e: PageEvent) {
    this.page.set(e.pageIndex);
  }

  submitPost(value: AddPostsValue) {
    this.#postsService.submitPost({ ...value, id: Date.now(), userId: 1 });
  }
}
