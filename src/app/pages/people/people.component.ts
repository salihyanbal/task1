import { Component, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character';
import { PeopleServiceService } from 'src/app/services/starwars/people-service.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  initialPeoples: Character[] = [];
  peoples: Character[] = [];
  peopleColumns: string[] = [];
  searchText: string = "";

  constructor(private peopleService: PeopleServiceService) { }

  ngOnInit(): void {
    this.getPeoples();
  }

  getPeoples(){
    this.peopleService.getPeoples().subscribe((response) => {
      this.initialPeoples = response.results
      this.peoples = response.results
      this.peopleColumns.push("delete")
      this.peopleColumns.push("update")
      Object.keys(response.results[0]).forEach(key =>{
        this.peopleColumns.push(key)
      })
      
    })
  }

  deletePeople(people: Character){
    console.log(people)
    this.peoples=this.peoples.filter(x => x.url !== people.url)
  }

  updatePeople(people:Character){

  }

  search(){
    if(this.searchText == null || this.searchText == ""){
      this.peoples = this.initialPeoples
    }
    this.peoples = this.peoples.filter(x => {
      return x.name.toLowerCase().includes(this.searchText.toLowerCase());
    })
    console.log(this.peoples)
  }

}
