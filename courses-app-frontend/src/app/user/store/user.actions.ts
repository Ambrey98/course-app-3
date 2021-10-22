import { createAction, props } from "@ngrx/store";
import { User } from "src/app/models/user";

export const requestCurrentUser = createAction(
  '[User] Request Current User',
);

export const requestCurrentUserSuccess = createAction(
  '[User] Request Current User Success',
  (user: User) => user
);

export const requestCurrentUserFail = createAction(
  '[User] Request Current User Fail',
  props<{message: string}>()
);