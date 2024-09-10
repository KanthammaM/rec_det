import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login.component';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginPageComponent ],
      imports: [ ReactiveFormsModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render login card', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.login-card')).toBeTruthy();
  });

  it('should display login image', () => {
    const compiled = fixture.nativeElement;
    const img = compiled.querySelector('.login-image');
    expect(img).toBeTruthy();
    expect(img.getAttribute('alt')).toBe('Login illustration');
  });

  it('should have a form with email and password fields', () => {
    const compiled = fixture.nativeElement;
    const emailInput = compiled.querySelector('input[formControlName="email"]');
    const passwordInput = compiled.querySelector('input[formControlName="password"]');
    expect(emailInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
  });

  it('should disable submit button when form is invalid', () => {
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    expect(submitButton.disabled).toBeTruthy();
  });

  it('should enable submit button when form is valid', () => {
    const compiled = fixture.nativeElement;
    const submitButton = compiled.querySelector('button[type="submit"]');
    component.loginForm.setValue({
      email: 'test@example.com',
      password: 'password123'
    });
    fixture.detectChanges();
    expect(submitButton.disabled).toBeFalsy();
  });
});