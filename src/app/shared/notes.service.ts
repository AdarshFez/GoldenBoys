import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class MsgService {

    private url = "https://goldenboys-be087.firebaseio.com/msg.json";
    private msg = new Array<string>();
    private arr: Array<string> = new Array();

    constructor(private http: HttpClient) { }

    pushh() {
            alert("sent to service");
            this.http.put(this.url, this.arr).subscribe();

    }

    onGetData(): void {
        this.http.get<Array<string>>(this.url).subscribe((data) => this.arr = data);
    }

    getData(num: number): string {
        return this.arr[num];

    }

    getL() {
        alert(this.arr.length);
    }

}
