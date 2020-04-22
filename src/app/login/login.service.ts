import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

const FIREBASE_API_KEY = "AIzaSyB7cHc0ZDh5TPBIsGA-Jmgvh68iLhbKW_Q";
// https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_API_KEY}
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=

@Injectable({ providedIn: "root" })
export class LoginService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    //alert(email + password);

    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
        { email, password, returnSecureToken: true }
      ).pipe(catchError(errorRes => {
          this.handleError(errorRes.error.error.messege);

          return throwError(errorRes);
      }));

  }

  logIn(email: string, password: string) {
    return this.http
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    ).pipe(catchError(errorRes => {
        this.handleError(errorRes.error.error.messege);

        return throwError(errorRes);
    }));
  }

  private handleError(errorMessage: string){
      switch (errorMessage){
        case "EMAIL_EXISTS":
            alert("This email exist already");
        case "INVALID_PASSWORD":
            alert("Password or Email invalid");
        default:
            alert("Authentication failed, try again or change info");
      }
  }
}
