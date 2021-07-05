import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDonationsComponent } from './add-donations.component';

describe('AddDonationsComponent', () => {
  let component: AddDonationsComponent;
  let fixture: ComponentFixture<AddDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
