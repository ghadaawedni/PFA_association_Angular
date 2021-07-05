import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActualitesComponent } from './edit-actualites.component';

describe('EditActualitesComponent', () => {
  let component: EditActualitesComponent;
  let fixture: ComponentFixture<EditActualitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditActualitesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditActualitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
