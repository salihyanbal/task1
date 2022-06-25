import { Post } from './../../models/post';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {}

  getByUserId(userId: number): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.apiUrl + '?userid=' + userId);
  }
}
