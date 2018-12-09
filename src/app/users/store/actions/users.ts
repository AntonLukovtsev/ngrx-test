import { Action } from '@ngrx/store';
import { User } from '../../models/user';

export const GET_USERS_REQUEST = '[Users] Get Users Request';
export const GET_USERS_SUCCESS = '[Users] Get Users Success';
export const GET_USERS_FAILURE = '[Users] Get Users Failure';

export const ADD_USER_REQUEST = '[User] Add Users Request';
export const ADD_USER_SUCCESS = '[User] Add Users Success';
export const ADD_USER_FAILURE = '[User] Add Users Failure';

export const REMOVE_USER_REQUEST = '[User] Remove Users Request';
export const REMOVE_USER_SUCCESS = '[User] Remove Users Success';
export const REMOVE_USER_FAILURE = '[User] Remove Users Failure';
export class GetUsersRequest implements Action {
  readonly type = GET_USERS_REQUEST;
  constructor() {}
}
export class GetUsersSuccess implements Action {
  readonly type = GET_USERS_SUCCESS;
  constructor(public payload: User[]) {}
}
export class GetUsersFailure implements Action {
  readonly type = GET_USERS_FAILURE;
  constructor(public payload: any) {}
}

export class AddUserRequest implements Action {
  readonly type = ADD_USER_REQUEST;
  constructor(public payload: User) {}
}
export class AddUserSuccess implements Action {
  readonly type = ADD_USER_SUCCESS;
  constructor(public payload: User) {}
}
export class AddUserFailure implements Action {
  readonly type = ADD_USER_FAILURE;
  constructor(public payload: any) {}
}

export class RemoveUserRequest implements Action {
  readonly type = REMOVE_USER_REQUEST;
  constructor(public payload: string) {}
}
export class RemoveUserSuccess implements Action {
  readonly type = REMOVE_USER_SUCCESS;
  constructor(public payload: string) {}
}
export class RemoveUserFailure implements Action {
  readonly type = REMOVE_USER_FAILURE;
  constructor(public payload: any) {}
}

export type Action =
  | GetUsersRequest
  | GetUsersSuccess
  | GetUsersFailure
  | AddUserRequest
  | AddUserSuccess
  | AddUserFailure
  | RemoveUserRequest
  | RemoveUserSuccess
  | RemoveUserFailure;
