import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-education-data',
  templateUrl: './education-data.component.html',
  styleUrls: ['./education-data.component.scss']
})
export class EducationDataComponent implements OnInit {

  @Input() public education: Array<any>;

  constructor() { }

  public ngOnInit(): void {
  }

}
