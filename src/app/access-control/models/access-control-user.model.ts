export class AccessControlUserModel {
  public id: string;
  public email: string;
  public accessToken: string;
  public role: string;

  constructor(accessControlUserModel: any) {
    this.id = accessControlUserModel.user_id;
    this.email = accessControlUserModel.user_email;
    this.accessToken = accessControlUserModel.accessToken;
    this.role = accessControlUserModel.user_role;

  }
}

