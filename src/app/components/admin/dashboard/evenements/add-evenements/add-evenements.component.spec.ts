import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEvenementsComponent } from './add-evenements.component';

describe('AddEvenementsComponent', () => {
  let component: AddEvenementsComponent;
  let fixture: ComponentFixture<AddEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEvenementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
