import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDrawerMenuComponent } from './mat-drawer-menu.component';

describe('MatDrawerMenuComponent', () => {
  let component: MatDrawerMenuComponent;
  let fixture: ComponentFixture<MatDrawerMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatDrawerMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatDrawerMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
