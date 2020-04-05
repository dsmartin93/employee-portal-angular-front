import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AccessControlService } from '../../services/access-control.service';
import { UserService } from 'src/app/users/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError: boolean = false;
  public loading: boolean = false;
  public errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private accessControlService: AccessControlService,
    private router: Router,
    private userService: UserService
  ) { }

  public ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  public get email(): AbstractControl { return this.loginForm.get('email'); }
  public get password(): AbstractControl { return this.loginForm.get('password'); }

  public submitForm(): void {
    console.warn(this.loginForm);
    this.loginForm.markAllAsTouched();
    if (this.loginForm.valid) {
      this.loading = true;
      this.accessControlService.login(this.email.value, this.password.value)
        .pipe(
          finalize(() => { this.loading = false; })
        ).subscribe((res) => {
          this.loginActions(res);
        }, (err) => {
          this.loginActions(err);
        });
    }
  }

  // TODO -> Check model
  private loginActions(res: any): void {
    this.loginError = false;
    if (typeof res.body === 'undefined' || res.status === 0) {
      this.loginError = true;
      // TODO -> Remove alert when alternative is available
      this.errorMessage = res.error.message;
    } else {
      this.accessControlService.setAuthToken(res.body.accessToken);
      const userAux = {
        id: res.body.id,
        email: res.body.email,
        role: res.body.role
      };
      this.accessControlService.setAuthUser(userAux);
      this.userService.initUser();
      this.router.navigate(['/dashboard']);
    }

  }

}
