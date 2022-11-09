import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  contactForm: FormGroup = new FormGroup({
    name: new FormControl('Validators value', [Validators.required, Validators.minLength(4)]),
    hobby: new FormControl('', [Validators.required])
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

  constructor() { }

  get contacts() {
    return this.formArray.get(['contacts']) as FormArray;
  }

  get contactName() {
    return this.contactForm.get('name')!
  }

  insertContact() {
    const groupData: FormGroup = new FormGroup({
      name: new FormControl(),
      hobby: new FormControl(),
      address: new FormControl(),
    });
    this.contacts.push(groupData);
  }

  handleRemove(index: number) {
    this.contacts.removeAt(index)
  }

  handleArraySubmit() {
    console.log(this.contacts);
  }

  handleSubmit(form: NgForm) {
    console.log('value:', form.value);
    console.log('valid', form.valid);
  }

  handleFormSubmit() {
    console.log('Validators contactForm', this.contactForm.value);
    console.log('Validators contactForm', this.contactForm.valid);
  }

  handleGroupSubmit() {
    console.log('GroupSubmit', this.contactGroupForm.value);
    console.log('name', this.contactGroupForm.get(['userInfo', 'name'])?.value);
  }

  ngOnInit(): void {
    this.insertContact();
  }
}
