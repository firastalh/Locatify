import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectUserCardComponent } from './add-project-user-card.component';

describe('AddProjectUserCardComponent', () => {
  let component: AddProjectUserCardComponent;
  let fixture: ComponentFixture<AddProjectUserCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjectUserCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
