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
    case userAction.ADD_USER_REQUEST: {
      return {
        ...state
      };
    }
    case userAction.ADD_USER_SUCCESS: {
      const newUser: User = action.payload;
      return {
        ...state,
        users: [...state.users, newUser]
      };
    }
    case userAction.ADD_USER_FAILURE: {
      const error: any = action.payload;
      return {
        ...state,
        ...error
      };
    }
    case userAction.EDIT_USER_REQUEST: {
      return {
        ...state
      };
    }
    case userAction.EDIT_USER_SUCCESS: {
      const newUser: User = action.payload;
      const tmpUsers = state.users;
      tmpUsers[tmpUsers.findIndex(i => i._id === newUser._id)] = newUser;
      return {
        ...state,
        users: tmpUsers
      };
    }
    case userAction.EDIT_USER_FAILURE: {
      const error: any = action.payload;
      return {
        ...state,
        ...error
      };
    }
    case userAction.REMOVE_USER_REQUEST: {
      return {
        ...state
      };
    }
    case userAction.REMOVE_USER_SUCCESS: {
      const userId: string = action.payload;
      return {
        ...state,
        users: state.users.filter(
          (item, index) =>
            index !== state.users.findIndex(i => i._id === userId)
        )
      };
    }
    case userAction.REMOVE_USER_FAILURE: {
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
