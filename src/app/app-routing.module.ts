import { UserComponent } from './pages/user/user.component';
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleComponent } from './pages/people/people.component';

const routes: Routes = [
  { path: '', component: PeopleComponent },
  { path: 'peopledetails/:id', component: PeopleDetailsComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
