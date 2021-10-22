import { Action, createReducer, on } from "@ngrx/store";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

export interface UserState {
  isAdmin: boolean;
  name: string;
}

const initialState: UserState = {
  isAdmin: false,
  name : ''
}

const requestCurrentUserReducer = createReducer(
  initialState,
  on(requestCurrentUser, (state) => state),
  on(requestCurrentUserFail, (state, action) => ({...state, errorMessage: action.message })),
  on(requestCurrentUserSuccess, (state) => ({...state, name: state.name, isAdmin: state.isAdmin}))
  );

export const userReducer = (state: UserState, action: Action): UserState => requestCurrentUserReducer(state, action)
export const userFeatureKey = 'userFeature';

