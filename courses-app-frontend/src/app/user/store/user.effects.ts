import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { UserService } from "../services/user.service";
import { requestCurrentUser, requestCurrentUserFail, requestCurrentUserSuccess } from "./user.actions";

@Injectable()
export class UserEffects {

  getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(requestCurrentUser),
    mergeMap(() => this.userService.get().pipe(
      map(user => requestCurrentUserSuccess(user)),
      catchError((errorResponse) => {
        return of(requestCurrentUserFail({message: errorResponse}));
      })
    ))
  ));

  constructor(private actions$: Actions, private userService: UserService) {}

}

