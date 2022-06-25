import { PageEvent } from '@angular/material/paginator';
import { Post } from './../../models/post';
import { PostService } from './../../services/post/post.service';
import { User } from './../../models/user';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.scss'],
})
export class UserPostsComponent implements OnInit {
  @Output() changeCurrentPostEvent: EventEmitter<any> = new EventEmitter<any>();
  @Input() user: User;

  posts: Post[] = [];
  postsToSend: Post[] = [];
  postColumns: string[] = [];

  constructor(private postService: PostService) {}

  ngOnInit(): void {
    this.getByUserId(this.user.id);
  }

  getByUserId(userId: number) {
    this.postService.getByUserId(userId).subscribe((response) => {
      this.postColumns = [];
      this.posts = response;
      this.postsToSend = this.posts.slice(0, 10);
      Object.keys(response[0]).forEach((key) => {
        this.postColumns.push(key);
      });
    });
  }

  paginatePosts(pageEvent: PageEvent) {
    let page = pageEvent.pageIndex;
    if (page * 10 < this.posts.length) {
      this.postsToSend = this.posts.slice(page * 10, (page + 1) * 10);
    }
  }

  changeCurrentPost(post: Post) {
    this.changeCurrentPostEvent.emit(post);
  }
}
