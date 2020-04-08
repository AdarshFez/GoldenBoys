import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { throwError, BehaviorSubject, of } from "rxjs";
import { alert } from "tns-core-modules/ui/dialogs";
import { RouterExtensions } from "nativescript-angular/router";
import {
  setString,
  getString,
  hasKey,
  remove
} from "tns-core-modules/application-settings";

import { User } from "./user.model";

const FIREBASE_API_KEY = "AIzaSyB7cHc0ZDh5TPBIsGA-Jmgvh68iLhbKW_Q";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]`,
        { email, password, returnSecureToken: true }
      )
      .subscribe((resData) => {
        console.log(resData);
      });
    alert("sent the request");
  }

  login(email: string, password: string) {}
}
