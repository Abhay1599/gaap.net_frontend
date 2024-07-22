import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTransitionComponent } from './business-transition.component';

describe('BusinessTransitionComponent', () => {
  let component: BusinessTransitionComponent;
  let fixture: ComponentFixture<BusinessTransitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusinessTransitionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BusinessTransitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
