import { Action, createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export const authFeatureKey = 'authFeature';

export interface AuthState {
  isAuthorized: boolean;
  token: string;
  errorMessage: string;
};

const initialState: AuthState = {
  isAuthorized : false,
  token : '',
  errorMessage : ''
};

const requestAuthReducer = createReducer(
  initialState,
  on(AuthActions.requestLogin, (state, {email, password}) => ({...state, email, password})),
  on(AuthActions.requestLoginSuccess, state => ({...state})),
  on(AuthActions.requestLoginFail, state => ({...state, errorMessage: state.errorMessage})),
  on(AuthActions.requestLogout, state => ({...state})),
  on(AuthActions.requestLogoutSuccess, state => ({...state})),
  on(AuthActions.requestRegister, state => ({...state})),
  on(AuthActions.requestRegisterSuccess, state => ({...state})),
  on(AuthActions.requestRegisterFail, state => ({...state, errorMessage: state.errorMessage }))
);

export const authReducer = (state: AuthState, action: Action): AuthState => requestAuthReducer(state, action);