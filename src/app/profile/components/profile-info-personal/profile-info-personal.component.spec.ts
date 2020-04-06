import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInfoPersonalComponent } from './profile-info-personal.component';

describe('ProfileInfoPersonalComponent', () => {
  let component: ProfileInfoPersonalComponent;
  let fixture: ComponentFixture<ProfileInfoPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileInfoPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileInfoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
