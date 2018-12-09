import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {
  @Input() user: User;
  @Output() removeUserEvent = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  removeUser() {
    this.removeUserEvent.emit(this.user._id);
  }
}
