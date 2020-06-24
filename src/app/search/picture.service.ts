import { Injectable } from "@angular/core";
import * as firebase from "nativescript-plugin-firebase";

import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class PictureService {

    private url = "https://goldenboys-be087.firebaseio.com/pic.json";

    ngOnInit() {
        firebase.init({
          // Optionally pass in properties for database, authentication and cloud messaging,
          // see their respective docs.
        }).then(
          () => {
            console.log("firebase.init done");
          },
          error => {
            console.log(`firebase.init error: ${error}`);
          }
        );
    }

    constructor(private http: HttpClient) { }

    uploadImage(remoteFullPath: string, localFullPath: string): Promise<any> {
        return firebase.storage.uploadFile({
            localFullPath,
            remoteFullPath,
            onProgress: null
        });
    }

    getTextFile(filename: string) {
        // The Observable returned by get() is of type Observable<string>
        // because a text response was specified.
        // There's no need to pass a <string> type parameter to get().
        return this.http.get(filename, {responseType: 'text'})
          .pipe(
            tap( // Log the result or error
              data => this.log(filename, data),
              error => this.logError(filename, error)
            )
          );
      }
}
