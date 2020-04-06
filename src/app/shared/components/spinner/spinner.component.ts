import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @Input() public size: string;
  public diameter: number;

  constructor() {
    this.diameter = 45;
  }

  public ngOnInit(): void {
    this.setSize();
  }

  public setSize(): void {
    if (this.size === 'small') {
      this.diameter = 20;
    }
    if (this.size === 'regular') {
      this.diameter = 45;
    }
    if (this.size === 'big') {
      this.diameter = 60;
    }
  }
}
