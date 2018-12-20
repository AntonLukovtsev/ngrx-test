import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit, OnChanges {
  userForm: FormGroup;
  label = 'Add';

  @Input() user;
  @Output() userEditValid = new EventEmitter();
  @Output() userAddValid = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges.user.previousValue !== simpleChanges.user.currentValue) {
      this.label = 'Update';
      this.userForm.setValue({name: this.user.name});
    }
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

  editUser() {
    if (this.userForm.valid) {
      this.user = {...this.user, ...this.userForm.value};
      this.userEditValid.emit(this.user);
      this.userForm.reset();
      this.label = 'Add';
    } else {
      this.userForm.updateValueAndValidity();
    }
  }
}
