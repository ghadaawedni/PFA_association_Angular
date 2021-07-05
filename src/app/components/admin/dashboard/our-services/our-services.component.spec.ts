import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurServicesListComponent } from './our-services.component';

describe('OurServicesListComponent', () => {
  let component: OurServicesListComponent;
  let fixture: ComponentFixture<OurServicesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurServicesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
