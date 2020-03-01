export class UserModel {
  public id: number;
  public name: string;
  public surname1: string;
  public surname2?: string;

  constructor(userModel: any) {
    this.id = userModel.id;
    this.name = userModel.name;
    this.surname1 = userModel.surname1;
    this.surname2 = userModel.surname2;
  }
}

