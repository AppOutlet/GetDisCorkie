import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataDeletionRequestComponent } from './data-deletion-request.component';

describe('DataDeletionRequestComponent', () => {
  let component: DataDeletionRequestComponent;
  let fixture: ComponentFixture<DataDeletionRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataDeletionRequestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataDeletionRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
