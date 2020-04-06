import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoEducationComponent } from './profile-info-education.component';

describe('ProfileInfoEducationComponent', () => {
  let component: ProfileInfoEducationComponent;
  let fixture: ComponentFixture<ProfileInfoEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
