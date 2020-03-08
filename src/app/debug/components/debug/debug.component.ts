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

  constructor(
    private debugService: DebugService
  ) { }

  public ngOnInit(): void {
  }


}
