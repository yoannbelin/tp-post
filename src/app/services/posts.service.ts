import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor() { }

  posts: Post[] = [new Post(
    "post numéro 1",
    "ceci est le text du premier post !"
  ),
  new Post(
    "Post numéro 2",
    "ceci est le text du deuxième post !"
  ),
  new Post(
    "Post numéro 3",
    "ceci est le text du troisième post !"
  )
  ];

  postsSubject = new Subject<Post[]>();

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  addPost(post: Post) {
    this.posts.push(post);
    this.emitPosts();
  }

  removePost(post: Post) {
    const postIndexToRemove = this.posts.findIndex(
      (postI) => {
        if(postI === post) {
          return true;
        }
      }
    );
    this.posts.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  like(post: Post) {
    const postIndexToLike = this.posts.findIndex(
      (postI) => {
        if(postI === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToLike].loveIts++;
    this.emitPosts();
  }

  dislike(post: Post) {
    const postIndexToDislike = this.posts.findIndex(
      (postI) => {
        if(postI === post) {
          return true;
        }
      }
    );
    this.posts[postIndexToDislike].loveIts--;
    this.emitPosts();
  }
}
