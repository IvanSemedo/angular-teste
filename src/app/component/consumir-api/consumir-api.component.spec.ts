import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumirAPIComponent } from './consumir-api.component';

describe('ConsumirAPIComponent', () => {
  let component: ConsumirAPIComponent;
  let fixture: ComponentFixture<ConsumirAPIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsumirAPIComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumirAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
