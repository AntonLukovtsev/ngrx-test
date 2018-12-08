import { Action } from '@ngrx/store';
import { User } from '../../models/user';
export const GET_USERS = '[User] Get Users';
export class GetUsers implements Action {
  readonly type = GET_USERS;
  constructor(public payload: User[]) {}
}
export type Action = GetUsers;
