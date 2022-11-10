import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { NameValidators } from './customValidators';

type data = {
  name: string
  value: boolean
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  checkBoxList = []

  contactForm: FormGroup = new FormGroup({
    name: new FormControl('Validators value', [
      Validators.required,
      Validators.minLength(4),
      NameValidators.cannotContainSpace
    ], NameValidators.shouldBeUnique),
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

  formBuilder: FormGroup

  constructor(private builder: FormBuilder) {
    this.formBuilder = this.builder.group({
      fullName: this.builder.group({
        firstName: ['', [Validators.required]],
        lastName: this.builder.control('', [Validators.required, Validators.minLength(2)])
      })
    })
  }

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

  handleFormBuilderSubmit() {
    console.log('formBuilder:', this.formBuilder.value);
    console.log('formBuilder:', this.formBuilder.valid);
  }

  ngOnInit(): void {
    this.insertContact();
  }
}
