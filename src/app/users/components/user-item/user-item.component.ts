import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Output() editUserEvent = new EventEmitter();
  @Output() removeUserEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  editUser(user) {
    this.editUserEvent.emit(user);
  }

  removeUser() {
    this.removeUserEvent.emit(this.user._id);
  }
}
