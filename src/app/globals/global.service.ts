import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})

export class GlobalService {
    admin = false;
    jam = "Brighter day";

    private msg = new Array<string>();

    setAdmin() {
        this.admin = true;
    }

    isAdmin(): boolean {
        return this.admin;
    }

    isMatch(check: string): boolean {
        if (check === this.jam) {
            this.admin = true;
        }

        return this.admin;
    }
}
