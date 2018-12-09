import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './models/user';
import { Store } from '@ngrx/store';
import * as fromUsers from './store/reducers';
import * as userActions from './store/actions/users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;
  constructor(private store: Store<fromUsers.State>) {
    this.users$ = this.store.select(fromUsers.getUsers);
  }

  ngOnInit() {
    this.store.dispatch(new userActions.GetUsers());
  }
}
