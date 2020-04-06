import { AccessControlUserModel } from './../../models/access-control-user.model';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { AccessControlService } from '../../services/access-control.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  public registerError: boolean = false;
  public loading: boolean = false;
  public errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private accessControlService: AccessControlService
  ) { }

  public ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

  public get email(): AbstractControl { return this.registerForm.get('email'); }
  public get password(): AbstractControl { return this.registerForm.get('password'); }

  public submitForm(): void {
    console.warn(this.registerForm);
    if (this.registerForm.valid) {
      this.loading = true;
      this.accessControlService.register(this.email.value, this.password.value)
        .pipe(
          finalize(
            () => { this.loading = false; }
          )
        ).subscribe((res) => {
          this.registerActions(res);
        }, (err) => {
          this.registerActions(err);
        });
    }
  }

  private registerActions(res: any): void {
    this.registerError = false;
    if (res.body === null || !res.ok) {
      this.registerError = true;
      console.error(res);
      this.errorMessage = res.error.message;
    } else {
      // TODO -> Remove alert when alternative is available
      alert('user registered succesfully');
      console.log(res);
    }

  }
}


