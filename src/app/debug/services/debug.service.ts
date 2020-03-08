import { ApiService } from './../../core/services/api.service';
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
    private httpClient: HttpClient,
    private apiService: ApiService
  ) { }


}
