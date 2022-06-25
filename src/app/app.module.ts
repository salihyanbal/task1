import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PeopleComponent } from './pages/people/people.component';
import { TableComponent } from './components/table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { PeopleDetailsComponent } from './pages/people-details/people-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserComponent } from './pages/user/user.component';
import { UserPostsComponent } from './pages/user-posts/user-posts.component';
import { UserPostCommentsComponent } from './pages/user-post-comments/user-post-comments.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    TableComponent,
    PeopleDetailsComponent,
    UserComponent,
    UserPostsComponent,
    UserPostCommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
