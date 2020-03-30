import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AccessControlService } from '../../services/access-control.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public loginError: boolean = false;
  public loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private accessControlService: AccessControlService,
    private router: Router,
  ) { }

  public ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  public get email(): AbstractControl { return this.loginForm.get('email'); }
  public get password(): AbstractControl { return this.loginForm.get('password'); }

  public onSubmit(): void {
    console.warn(this.loginForm);
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
  private loginActions(res: HttpResponse<any>): void {
    this.loginError = false;
    if (res.body === null || res.status === 0) {
      this.loginError = true;
    } else {
      this.accessControlService.setAuthToken(res.body.accessToken);
      const userAux = {
        id: res.body.id,
        email: res.body.email,
        role: res.body.role
      };
      this.accessControlService.setAuthUser(userAux);
      this.router.navigate(['/dashboard']);
    }

  }

}
