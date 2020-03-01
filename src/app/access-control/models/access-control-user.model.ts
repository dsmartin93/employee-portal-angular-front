export class AccessControlUserModel {
  public id: string;
  public email: string;
  public password: string;
  public role: string;

  constructor(accessControlUserModel: any) {
    this.id = accessControlUserModel.user_id;
    this.email = accessControlUserModel.user_email;
    this.password = accessControlUserModel.user_password;
    this.role = accessControlUserModel.user_role;

  }
}

