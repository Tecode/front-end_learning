import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('Default value'),
    hobby: new FormControl(),
  });

  contactGroupForm: FormGroup = new FormGroup({
    userInfo: new FormGroup({
      name: new FormControl('Default value'),
      hobby: new FormControl(),
    }),
  });

  formArray: FormGroup = new FormGroup({
    contacts: new FormArray([]),
  });

  constructor() {}

  get contacts() {
    return this.formArray.get(['contacts']) as FormArray;
  }

  insertContact() {
    const groupData: FormGroup = new FormGroup({
      name: new FormControl(),
      hobby: new FormControl(),
      address: new FormControl(),
    });
    this.contacts.push(groupData);
  }

  handleSubmit(form: NgForm) {
    console.log('value:', form.value);
    console.log('valid', form.valid);
  }

  handleFormSubmit() {
    console.log('contactForm', this.contactForm.value);
  }

  handleGroupSubmit() {
    console.log('GroupSubmit', this.contactGroupForm.value);
    console.log('name', this.contactGroupForm.get(['userInfo', 'name'])?.value);
  }

  ngOnInit(): void {
    this.insertContact();
  }
}
