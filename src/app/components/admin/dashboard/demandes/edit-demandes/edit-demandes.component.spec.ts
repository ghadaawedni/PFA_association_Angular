import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDemandesComponent } from './edit-demandes.component';

describe('EditDemandesComponent', () => {
  let component: EditDemandesComponent;
  let fixture: ComponentFixture<EditDemandesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDemandesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDemandesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
