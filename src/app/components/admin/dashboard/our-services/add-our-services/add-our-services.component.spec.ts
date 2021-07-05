import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOurServicesComponent } from './add-our-services.component';

describe('AddOurServicesComponent', () => {
  let component: AddOurServicesComponent;
  let fixture: ComponentFixture<AddOurServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOurServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
