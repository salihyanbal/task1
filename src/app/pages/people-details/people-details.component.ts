import { People } from './../../models/people';
import { PeopleService } from './../../services/starwars/people.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss'],
})
export class PeopleDetailsComponent implements OnInit {
  people: People;

  constructor(
    private peopleService: PeopleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.getPeopleById(params['id']);
      }
    });
  }

  getPeopleById(id: number) {
    this.peopleService.getPeopleById(id).subscribe((response) => {
      this.people = response;
    });
  }
}
