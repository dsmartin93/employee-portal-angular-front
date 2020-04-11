import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact-data',
  templateUrl: './contact-data.component.html',
  styleUrls: ['./contact-data.component.scss']
})
export class ContactDataComponent implements OnInit {

  @Input() public contact: any;

  constructor() { }

  public ngOnInit(): void {
  }

}
