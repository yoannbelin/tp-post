import { Component,Input, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  like(post: Post){
    this.postsService.like(post);
    console.log("j'aime");
  }

  dislike(post: Post){
    this.postsService.dislike(post);
    console.log("je n'aime pas");
  }

  constructor(private postsService: PostsService) { }

  ngOnInit() {
    
  }

  delete(post: Post) {
    this.postsService.removePost(post);
  }

}
