import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User[] = [];

  @Input()
  set _users(newValue) {
    console.log('newValue: ', newValue);
  }

  constructor() {}

  ngOnInit() {}
}
