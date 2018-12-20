import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { User } from './models/user';
import { Store } from '@ngrx/store';
import * as fromUsers from './store/reducers';
import * as userActions from './store/actions/users';
import { map } from 'rxjs/operators';
import { State } from './store/reducers/users';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users$: Observable<User[]>;

  user;

  constructor(private store: Store<fromUsers.State>) {
    this.users$ = store.select(fromUsers.getUsers).pipe(
      map(state => {
        return state['users'];
      })
    );
  }

  ngOnInit() {
    this.store.dispatch(new userActions.GetUsersRequest());
  }

  addUser(user) {
    this.store.dispatch(new userActions.AddUserRequest(user));
  }

  getUser(user) {
    this.user = user;
  }

  editUser(user) {
    this.store.dispatch(new userActions.EditUserRequest(user));
  }

  removeUser(userId) {
    this.store.dispatch(new userActions.RemoveUserRequest(userId));
  }
}
