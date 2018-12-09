import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  userForm: FormGroup;

  @Output() userAddValid = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required]
    });
  }

  addUser() {
    if (this.userForm.valid) {
      this.userAddValid.emit(this.userForm.value);
      this.userForm.reset();
    } else {
      this.userForm.updateValueAndValidity();
    }
  }
}
