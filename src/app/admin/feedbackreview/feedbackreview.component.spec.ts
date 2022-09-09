import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackreviewComponent } from './feedbackreview.component';

describe('FeedbackreviewComponent', () => {
  let component: FeedbackreviewComponent;
  let fixture: ComponentFixture<FeedbackreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeedbackreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
