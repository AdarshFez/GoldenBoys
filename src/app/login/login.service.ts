import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const FIREBASE_API_KEY = "AIzaSyB7cHc0ZDh5TPBIsGA-Jmgvh68iLhbKW_Q";
// https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_API_KEY}
// https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=

@Injectable({ providedIn: "root" })
export class LoginService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    alert(email + password);

    return this.http
      .post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
        { email, password, returnSecureToken: true }
      );

  }

  logIn(email: string, password: string) {
    return this.http
    .post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`,
      { email, password, returnSecureToken: true }
    );
  }
}
