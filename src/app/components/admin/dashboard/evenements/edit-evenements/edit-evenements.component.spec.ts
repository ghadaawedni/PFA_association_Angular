import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEvenementsComponent } from './edit-evenements.component';

describe('EditEvenementsComponent', () => {
  let component: EditEvenementsComponent;
  let fixture: ComponentFixture<EditEvenementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditEvenementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEvenementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
