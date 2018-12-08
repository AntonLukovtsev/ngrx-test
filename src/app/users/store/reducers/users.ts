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
    case userAction.GET_USERS: {
      const newUsers: User[] = action.payload;
      return {
        ...state,
        users: [...state.users, ...newUsers]
      };
    }
    default:
      return state;
  }
}
export const getUsers = (state: State) => state.users;
