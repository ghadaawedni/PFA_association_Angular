import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDonationsComponent } from './edit-donations.component';

describe('EditDonationsComponent', () => {
  let component: EditDonationsComponent;
  let fixture: ComponentFixture<EditDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
