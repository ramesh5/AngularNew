import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprojectdialogsComponent } from './addprojectdialogs.component';

describe('AddprojectdialogsComponent', () => {
  let component: AddprojectdialogsComponent;
  let fixture: ComponentFixture<AddprojectdialogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddprojectdialogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddprojectdialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


