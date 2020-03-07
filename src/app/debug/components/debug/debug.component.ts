import { environment } from 'src/environments/environment';
import { Component, OnInit } from '@angular/core';
import { DebugService } from '../../services/debug.service';
import { TestDataModel } from '../../models/testdata.model';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-debug',
  templateUrl: './debug.component.html',
  styleUrls: ['./debug.component.scss']
})
export class DebugComponent implements OnInit {
  public environment: any = environment;
  public response: Array<TestDataModel>;

  constructor(
    private debugService: DebugService
  ) { }

  public ngOnInit(): void {
    //this.testDebugService();
    this.testMocks();
  }

  public testMocks(): void {
    this.debugService.testMocks();
  }

  public testDebugService(): void {

    this.getAllTestData();
    this.getTestDataById(1);
    const testDataPost: TestDataModel = {
      id: 3,
      movie: 'Inception',
      director: 'Christopher Nolan',
      cast: ['Leonardo DiCaprio', 'Arnold Schwarzenegger']
    };
    this.postTestData(testDataPost);
    const testDataPut: TestDataModel = {
      id: 2,
      movie: 'Kickboxer',
      director: 'Mark Di Salle',
      cast: ['Jean Claude Van Damme', 'Dennis Alexio']
    };
    this.putTestData(testDataPut);
    setTimeout(() => {
      this.deleteTestData(3);
    }, 5000);
  }

  public getAllTestData(): void {
    this.debugService.getAllTestData().subscribe((res) => {
      this.response = res;
      console.log('GET ALL ', this.response);
    });
  }

  public getTestDataById(id: number): void {
    this.debugService.getTestDataById(id).subscribe((res) => {
      console.log(`GET request for id:${ id }`, res);
    });
  }

  public postTestData(testdata: TestDataModel): void {
    this.debugService.postTestData(testdata)
      .pipe(
        finalize(
          () => { this.getAllTestData(); })
      ).subscribe((res) => {
        console.log('POST Request is successful ', res);
      },
        (error) => {
          console.error('Error', error);
        });
  }

  public deleteTestData(id: number): void {
    this.debugService.deleteTestData(id)
      .pipe(
        finalize(
          () => { this.getAllTestData(); })
      ).subscribe(() => {
        console.log('DELETE Request is successful ');
      },
        (error) => {
          console.error('Error', error);
        });
  }

  public putTestData(testdata: TestDataModel): void {
    this.debugService.putTestData(testdata)
      .pipe(
        finalize(
          () => { this.getAllTestData(); })
      ).subscribe((res) => {
        console.log('PUT Request is successful ', res);
      },
        (error) => {
          console.error('Error', error);
        });
  }

}
