import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profile-info-edit',
  templateUrl: './profile-info-edit.component.html',
  styleUrls: ['./profile-info-edit.component.scss']
})
export class ProfileInfoEditComponent implements OnInit {

  public profileInfoForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  public ngOnInit(): void {
    this.profileInfoForm = this.formBuilder.group({
      name: [''],
      surname1: [''],
      surname2: [''],
    });
  }

}
