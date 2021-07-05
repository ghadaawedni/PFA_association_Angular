import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMembresComponent } from './edit-membres.component';

describe('EditMembresComponent', () => {
  let component: EditMembresComponent;
  let fixture: ComponentFixture<EditMembresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMembresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMembresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
