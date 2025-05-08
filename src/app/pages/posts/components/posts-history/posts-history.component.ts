import { Component, input, output, signal } from '@angular/core';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { PostPaginationPipe } from '../../pipes/post-pagination.pipe';
import { Posts } from '../../store/posts.model';

@Component({
  selector: 'app-posts-history',
  imports: [PostPaginationPipe, MatPaginatorModule],
  templateUrl: './posts-history.component.html',
  styleUrl: './posts-history.component.scss',
})
export class PostsHistoryComponent {
  length = input.required<number>();
  pageLimit = input.required<number>();
  posts = input.required<Posts[]>();

  pageIndex = signal<number>(0);

  pageChanged(e: PageEvent) {
    this.pageIndex.set(e.pageIndex);
  }
}
