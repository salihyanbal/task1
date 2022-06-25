import { ResponseListModel } from './../../models/responseListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { People } from 'src/app/models/people';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  apiUrl = 'https://swapi.dev/api/';

  constructor(private httpClient: HttpClient) {}
  // can burada kaldığımızı söylüyor
  getPeoplesByPage(page: number): Observable<ResponseListModel<People>> {
    return this.httpClient.get<ResponseListModel<People>>(
      this.apiUrl + 'people?page=' + page
    );
  }

  getPeopleById(id: number): Observable<People> {
    return this.httpClient.get<People>(this.apiUrl + 'people/' + id);
  }
}
