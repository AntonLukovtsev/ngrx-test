import * as userAction from '../actions/users';
import { User } from '../../models/user';

export interface State {
  users: User[];
}

export const initialState: State = {
  users: []
};

export function reducer(state = initialState, action: userAction.Action) {
  switch (action.type) {
    case userAction.GET_USERS_REQUEST: {
      return {
        ...state
      };
    }
    case userAction.GET_USERS_SUCCESS: {
      const newUsers: User[] = action.payload;
      return {
        ...state,
        users: [...state.users, ...newUsers]
      };
    }
    case userAction.GET_USERS_FAILURE: {
      const error: any = action.payload;
      return {
        ...state,
        ...error
      };
    }
    default:
      return state;
  }
}
export const getUsers = (state: State) => state.users;
