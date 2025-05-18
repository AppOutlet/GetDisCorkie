import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialButtonComponent } from './social-button.component';

describe('SocialButtonComponent', () => {
  let component: SocialButtonComponent;
  let fixture: ComponentFixture<SocialButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
