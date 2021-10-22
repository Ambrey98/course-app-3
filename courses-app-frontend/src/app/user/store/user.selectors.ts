import { createSelector } from "@ngrx/store";
import { UserState } from "./user.reducer";

export const getName = createSelector(
  (state: UserState) => state,
  (user) => user.name
);

export const isAdmin = createSelector(
  (state: UserState) => state,
  (user) => user.isAdmin
)