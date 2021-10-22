import { createSelector } from "@ngrx/store";
import { AuthState } from "./auth.reducer";

export const isUserAuthorized = createSelector(
  (state: AuthState) => state,
  (auth) => auth.isAuthorized
);

export const getToken = createSelector(
  (state: AuthState) => state,
  (auth) => auth.token
);

export const getSpecificErrorMessage = createSelector(
  (state: AuthState) => state,
  (auth) => auth.errorMessage
);