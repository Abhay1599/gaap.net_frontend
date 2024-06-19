import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfrsComponent } from './ifrs.component';

describe('IfrsComponent', () => {
  let component: IfrsComponent;
  let fixture: ComponentFixture<IfrsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfrsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
