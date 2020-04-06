import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoExperienceComponent } from './profile-info-experience.component';

describe('ProfileInfoExperienceComponent', () => {
  let component: ProfileInfoExperienceComponent;
  let fixture: ComponentFixture<ProfileInfoExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
