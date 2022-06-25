import { Post } from './../../models/post';
import { User } from './../../models/user';
import { UserService } from './../../services/user/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  currentPost: Post;
  user: User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
    this.userService.getUsers().subscribe((response) => {
      this.user = response[0];
    });
  }

  changeCurrentPost(post: Post) {
    this.currentPost = post;
  }
}
