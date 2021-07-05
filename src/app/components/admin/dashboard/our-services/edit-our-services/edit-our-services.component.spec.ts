import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOurServicesComponent } from './edit-our-services.component';

describe('EditOurServicesComponent', () => {
  let component: EditOurServicesComponent;
  let fixture: ComponentFixture<EditOurServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditOurServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
