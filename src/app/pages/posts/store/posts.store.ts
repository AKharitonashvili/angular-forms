import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { Posts } from './posts.model';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { inject } from '@angular/core';
import { PostsApiService } from '../services/posts-api.service';

export const PostsStore = signalStore(
  { protectedState: false },
  withState<{ posts: Posts[]; loaded: boolean; error: string | null }>({
    posts: [],
    loaded: false,
    error: null,
  }),
  withMethods((store, postsService = inject(PostsApiService)) => ({
    loadAllPosts: rxMethod<void>(
      pipe(
        tap(() => {
          patchState(store, { posts: [], error: null, loaded: false });
        }),
        switchMap(() =>
          postsService
            .getAllPosts()
            .pipe(
              tap((posts) =>
                patchState(store, { posts, loaded: true, error: null }),
              ),
            ),
        ),
      ),
    ),
  })),
);
