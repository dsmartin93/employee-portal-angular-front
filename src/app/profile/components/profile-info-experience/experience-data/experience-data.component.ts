import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-experience-data',
  templateUrl: './experience-data.component.html',
  styleUrls: ['./experience-data.component.scss']
})
export class ExperienceDataComponent implements OnInit {

  @Input() public experience: Array<any>;

  constructor() { }

  public ngOnInit(): void {
  }

}
