import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromUsers from '../store/reducers/users';
import * as userActions from '../store/actions/users';
import * as fromServices from '../services/user.service';
import { User, RemoveUserResponse } from '../models/user';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private userService: fromServices.UserService
  ) {}

  @Effect()
  loadUsers$ = this.actions$.ofType(userActions.GET_USERS_REQUEST).pipe(
    switchMap(() => {
      return this.userService.getUsers().pipe(
        map(users => {
          return new userActions.GetUsersSuccess(users);
        }),
        catchError(error => of(new userActions.GetUsersFailure(error)))
      );
    })
  );

  @Effect()
  addUser$ = this.actions$.ofType(userActions.ADD_USER_REQUEST).pipe(
    switchMap((action: userActions.AddUserRequest) => {
      return this.userService.addUser(action.payload).pipe(
        map(newUser => {
          return new userActions.AddUserSuccess(newUser);
        }),
        catchError(error => of(new userActions.AddUserFailure(error)))
      );
    })
  );


  @Effect()
  editUser$ = this.actions$.ofType(userActions.EDIT_USER_REQUEST).pipe(
    switchMap((action: userActions.EditUserRequest) => {
      return this.userService.editUser(action.payload).pipe(
        map(newUser => {
          return new userActions.EditUserSuccess(newUser);
        }),
        catchError(error => of(new userActions.EditUserFailure(error)))
      );
    })
  );

  @Effect()
  removeUser$ = this.actions$.ofType(userActions.REMOVE_USER_REQUEST).pipe(
    switchMap((action: userActions.RemoveUserRequest) => {
      return this.userService.removeUser(action.payload).pipe(
        map((callback: RemoveUserResponse) => {
          return new userActions.RemoveUserSuccess(callback.id);
        }),
        catchError(error => of(new userActions.RemoveUserFailure(error)))
      );
    })
  );
}
