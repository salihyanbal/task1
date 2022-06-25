import { PageEvent } from '@angular/material/paginator';
import { Comment } from './../../models/comment';
import { CommentService } from './../../services/comment/comment.service';
import { Post } from './../../models/post';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-user-post-comments',
  templateUrl: './user-post-comments.component.html',
  styleUrls: ['./user-post-comments.component.scss'],
})
export class UserPostCommentsComponent implements OnInit {
  @Input() post: Post;
  comments: Comment[] = [];
  commentsToSend: Comment[] = [];
  commentColumns: string[] = [];

  constructor(private commentService: CommentService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.getByPostId(this.post.id);
  }

  getByPostId(postId: number) {
    this.commentService.getByPostId(postId).subscribe((response) => {
      this.commentColumns = [];
      this.comments = response;
      this.commentsToSend = this.comments.slice(0, 10);
      Object.keys(response[0]).forEach((key) => {
        this.commentColumns.push(key);
      });
    });
  }

  paginateComments(pageEvent: PageEvent) {
    let page = pageEvent.pageIndex;
    if (page * 10 < this.comments.length) {
      this.commentsToSend = this.comments.slice(page * 10, (page + 1) * 10);
    }
  }
}
