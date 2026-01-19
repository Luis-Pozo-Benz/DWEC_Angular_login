import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariLogin } from './login-form';

describe('FormulariLogin', () => {
  let component: FormulariLogin;
  let fixture: ComponentFixture<FormulariLogin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulariLogin]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulariLogin);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
