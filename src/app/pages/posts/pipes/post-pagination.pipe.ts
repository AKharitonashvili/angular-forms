import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from '../store/posts.model';
import { PAGE_LIMIT } from '../consts/posts.consts';

@Pipe({
  name: 'postPagination',
})
export class PostPaginationPipe implements PipeTransform {
  transform(posts: Posts[], page: number): Posts[] {
    const start = page * PAGE_LIMIT;
    return posts.slice(start, start + PAGE_LIMIT);
  }
}
