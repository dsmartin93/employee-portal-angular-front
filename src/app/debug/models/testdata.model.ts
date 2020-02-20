export class TestDataModel {
  public id: number;
  public movie: string;
  public director?: string;
  public cast?: Array<string>;

  constructor(testData: any) {
    this.id = testData.id;
    this.movie = testData.movie;
    this.director = testData.director;
    this.cast = testData.cast;
  }
}

