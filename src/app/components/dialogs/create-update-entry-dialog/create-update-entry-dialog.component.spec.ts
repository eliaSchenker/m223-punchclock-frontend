import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateEntryDialogComponent } from './create-update-entry-dialog.component';

describe('CreateUpdateEntryDialogComponent', () => {
  let component: CreateUpdateEntryDialogComponent;
  let fixture: ComponentFixture<CreateUpdateEntryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateEntryDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
