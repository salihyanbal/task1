import { Comment } from './../../models/comment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  apiUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {}

  getByPostId(postId: number): Observable<Comment[]> {
    return this.httpClient.get<Comment[]>(this.apiUrl + '?postId=' + postId);
  }
}
