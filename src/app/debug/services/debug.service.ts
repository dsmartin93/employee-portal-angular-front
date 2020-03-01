import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { TestDataModel } from '../models/testdata.model';

@Injectable({
  providedIn: 'root'
})
export class DebugService {

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTestData(): Observable<any> {
    return this.httpClient.get<TestDataModel[]>(`${ environment.api.apiUrl }/testdata`)
      .pipe(
        map((res) => res.map((testdata) => new TestDataModel(testdata)))
      );
  }

  public getTestDataById(id: number): Observable<any> {
    return this.httpClient.get<TestDataModel>(`${ environment.api.apiUrl }/testdata/${ id }`)
      .pipe(
        map((res) => new TestDataModel(res))
      );
  }

  public deleteTestData(id: number): Observable<any> {
    return this.httpClient.delete<TestDataModel>(`${ environment.api.apiUrl }/testdata/${ id }`);
  }

  public postTestData(testdataObject: TestDataModel): Observable<any> {
    return this.httpClient.post<TestDataModel>(`${ environment.api.apiUrl }/testdata`, testdataObject);
  }

  public putTestData(testdataObject: TestDataModel): Observable<any> {
    return this.httpClient.put<TestDataModel>(`${ environment.api.apiUrl }/testdata/${ testdataObject.id }`, testdataObject);
  }

}
