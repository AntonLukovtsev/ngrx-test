import { Action } from '@ngrx/store';
import { User } from '../../models/user';
export const GET_USERS_REQUEST = '[Users] Get Users Request';
export const GET_USERS_SUCCESS = '[Users] Get Users Success';
export const GET_USERS_FAILURE = '[Users] Get Users Failure';
export class GetUsers implements Action {
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
export type Action = GetUsers | GetUsersSuccess | GetUsersFailure;
