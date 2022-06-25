import { ResponseListModel } from './../../models/responseListModel';
import { PageEvent } from '@angular/material/paginator';
import { PeopleService } from './../../services/starwars/people.service';
import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/models/people';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
})
export class PeopleComponent implements OnInit {
  peopleResponseList: ResponseListModel<People>;
  initialPeoples: People[] = [];
  peoples: People[] = [];
  peopleColumns: string[] = [];
  searchText: string = '';

  constructor(private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.getPeoplesByPage(1);
  }

  getPeoplesByPage(page: number) {
    this.peopleService.getPeoplesByPage(page).subscribe((response) => {
      this.peopleColumns = [];
      this.peopleResponseList = response;
      this.initialPeoples = response.results;
      this.peoples = response.results;
      this.peopleColumns.push('delete');
      this.peopleColumns.push('update');
      Object.keys(response.results[0]).forEach((key) => {
        this.peopleColumns.push(key);
      });
    });
  }

  deletePeople(people: People) {
    this.peoples = this.peoples.filter((x) => x.url !== people.url);
  }

  updatePeople(people: People) {}

  search() {
    if (this.searchText == null || this.searchText == '') {
      this.peoples = this.initialPeoples;
    }
    this.peoples = this.peoples.filter((x) => {
      return x.name.toLowerCase().includes(this.searchText.toLowerCase());
    });
    console.log(this.peoples);
  }

  routeToDetails(people: People) {
    let peopleSplited = people.url.split('/');
    let peopleId = peopleSplited[peopleSplited.length - 2];
    this.router.navigate(['/peopledetails/' + peopleId]);
  }

  paginate(pageEvent: PageEvent) {
    this.getPeoplesByPage(pageEvent.pageIndex + 1);
  }
}
