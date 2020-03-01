import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, AbstractControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { HttpResponse } from '@angular/common/http';
import { AccessControlUserModel } from '../../models/access-control-user.model';
import { finalize } from 'rxjs/operators';

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
    private loginService: LoginService,
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
      this.loginService.login(this.email.value, this.password.value)
        .pipe(
          finalize(() => { this.loading = false; })
        ).subscribe((res) => {
          this.loginActions(res);
        }, (err) => {
          this.loginActions(err);
        });
    }
  }

  private loginActions(res: HttpResponse<AccessControlUserModel>): void {
    this.loginError = false;
    if (res.body === null || res.status === 0) {
      this.loginError = true;
    } else {
      console.log(res.body);
    }

  }

}
