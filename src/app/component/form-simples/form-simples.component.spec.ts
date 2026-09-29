import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSimplesComponent } from './form-simples.component';

describe('FormSimplesComponent', () => {
  let component: FormSimplesComponent;
  let fixture: ComponentFixture<FormSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSimplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
