import { Component, inject, signal } from '@angular/core';
import { PostsStore } from './store/posts.store';
import { PostsService } from './services/posts.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PAGE_LIMIT } from './consts/posts.consts';
import { PostPaginationPipe } from './pipes/post-pagination.pipe';

@Component({
  selector: 'app-posts',
  imports: [MatPaginatorModule, PostPaginationPipe],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
  providers: [PostsStore, PostsService],
})
export class PostsComponent {
  readonly #postsService = inject(PostsService);

  readonly pageLimit = signal<number>(PAGE_LIMIT);
  readonly page = signal<number>(0);

  postsState = this.#postsService.postsStore;

  pageChanged(e: PageEvent) {
    this.page.set(e.pageIndex);
  }
}
