import { AccessControlUserModel } from './../../models/access-control-user.model';
import { RegisterService } from './../../services/register.service';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public RegisterError: boolean = false;
  public loading: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private registerService: RegisterService
  ) { }

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  public get email(): AbstractControl { return this.registerForm.get('email'); }
  public get password(): AbstractControl { return this.registerForm.get('password'); }

  public onSubmit(): void {
    console.warn(this.registerForm);
    if (this.registerForm.valid) {
      this.loading = true;
      this.registerService.register(this.email.value, this.password.value)
        .pipe(
          finalize(() => { this.loading = false; })
        ).subscribe((res) => {
          this.registerActions(res);
        }, (err) => {
          this.registerActions(err);
        });
    }
  }

  private registerActions(res: HttpResponse<AccessControlUserModel>): void {
    this.RegisterError = false;
    if (res.body === null || res.status === 0) {
      this.RegisterError = true;
    } else {
      console.error(res);
    }

  }
}


