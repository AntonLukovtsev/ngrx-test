import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as fromUsers from '../store/reducers/users';
import * as userActions from '../store/actions/users';
import * as fromServices from '../services/user.service';

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
}
