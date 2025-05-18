import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SloganComponent } from './slogan.component';

describe('SloganComponent', () => {
  let component: SloganComponent;
  let fixture: ComponentFixture<SloganComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SloganComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
