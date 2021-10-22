import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, mergeMap, switchMap } from "rxjs/operators";
import { User } from "src/app/models/user";
import { requestCurrentUser } from "src/app/user/store/user.actions";
import { AuthService } from "../services/auth.service";
import { requestLogin, requestLoginSuccess } from "./auth.actions";

@Injectable()
export class AuthEffects {

  /*
  $login = createEffect(() => this.action$.pipe(
    ofType(requestLogin),
    exhaustMap((action) => {
      return this.authService.login2(action.email, action.password).pipe(
        map((data) => {
          return of(requestLoginSuccess({message: 'Successfully logged in'}));
        })
      )
    })
  )) 
    */
  constructor(private action$: Actions, private authService: AuthService) {}
}