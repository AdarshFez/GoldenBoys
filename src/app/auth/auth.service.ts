import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

const FIREBASE_API_KEY = "AIzaSyB7cHc0ZDh5TPBIsGA-Jmgvh68iLhbKW_Q";

@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  signUp(email: string, password: string) {
    this.http
      .post(
        `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${FIREBASE_API_KEY}`,
        { email, password, returnSecureToken: true }
      )
      .subscribe((resData) => {
        console.log(resData);
      });
  }

  login(email: string, password: string) {}
}
