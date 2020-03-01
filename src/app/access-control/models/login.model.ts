export class LoginModel {
  public email: string;
  public password: string;

  constructor(loginModel: any) {
    this.email = loginModel.email;
    this.password = loginModel.password;

  }
}

