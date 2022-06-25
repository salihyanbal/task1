import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPostCommentsComponent } from './user-post-comments.component';

describe('UserPostCommentsComponent', () => {
  let component: UserPostCommentsComponent;
  let fixture: ComponentFixture<UserPostCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserPostCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPostCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
