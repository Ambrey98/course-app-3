import { createAction, props } from "@ngrx/store";


/*-------------- Login/Logout related Actions --------------*/
export const requestLogin = createAction(
  '[Auth] Request Login',
  props<{ email: string; password: string }>()
);

export const requestLoginSuccess = createAction(
  '[Auth] Request Login Success',
  props<{message: string}>()
);

export const requestLoginFail = createAction(
  '[Auth] Request Login Fail',
  props<{message: string}>()
);

export const requestLogout = createAction(
  '[Auth] Request Logout'
);

export const requestLogoutSuccess = createAction(
  '[Auth] Request Logout Success',
  props<{message: string}>()
)



/*--------------- Register related Actions ---------------*/
export const requestRegister = createAction(
  '[Auth] Request Register',
  props<{name: string, email: string, password: string}>()
);

export const requestRegisterSuccess = createAction(
  '[Auth] Request Register Success',
  props<{message: string}>()
);

export const requestRegisterFail = createAction(
  '[Auth] Request Register Fail',
  props<{message: string}>()
);