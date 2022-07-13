import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateLocationDialogComponent } from './create-update-location-dialog.component';

describe('CreateUpdateLocationDialogComponent', () => {
  let component: CreateUpdateLocationDialogComponent;
  let fixture: ComponentFixture<CreateUpdateLocationDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateLocationDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateLocationDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
