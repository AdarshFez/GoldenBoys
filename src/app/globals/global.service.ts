import { Injectable, Testability } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { AdItem } from "./global.supply";

@Injectable({
    providedIn: "root"
})

export class GlobalService {
    admin = false;
    jam = "Brighter day";

    goldMsg = " Press the Refresh Button for the current Messeges ";
    currentEvent = "";
    missionStatement = "";
    sponsors = "";
    user = "change";

    private url = "https://goldenboys-be087.firebaseio.com/admin.json";
    private adminArr: Array<AdItem> = new Array();

    constructor(private http: HttpClient) { }

    makeAAdmin(emai: string) {
        const temp = {Email: emai, Admin: true };
        this.adminArr.push(temp);
        this.http.put(this.url, this.adminArr).subscribe();
        alert("They were made an Admin");
    }

    checkAgain() {
        if (this.admin) {
            alert("you are an Admin")
        } else {
            if (this.adminArr.length > 0) {
                for (let i = 0; i < this.adminArr.length; i++) {
                    if (this.user === this.adminArr[i].Email )
                    {
                        this.admin = true;
                        alert("you are admin");
                    } else {
                        alert("Sorry you don't seem to be an admin");
                    }
                }
            } else {
                this.setAdmin(this.user);
                alert("Admin status:" + this.admin);
            }
        }

    }

    getAdmin() {
        // console.log(this.adminArr.length);
        this.http.get<Array<AdItem>>(this.url).subscribe((data) => this.adminArr = data);
        // console.log(this.adminArr.length);
    }

    resetUser() {
        this.user = "change";
        this.admin = false;
    }

    setAdmin(emai: string): void {
        // alert("admin check");
        if (this.user === "change") {
            this.user = emai;
        }
        this.http.get<Array<AdItem>>(this.url).subscribe((data) => this.adminArr = data);
        // console.log(this.adminArr.length);
        // tslint:disable-next-line: prefer-for-of
        for (let i = 0; i < this.adminArr.length; i++) {
            // console.log(this.adminArr[i].Email);
            // console.log(emai);
            if (this.adminArr[i].Email === emai) {

                  this.admin = true;
                  // alert(this.admin);

              }
          }
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

    getGold() {
        return this.goldMsg;
    }

    setGold(mms: string) {
        this.goldMsg = mms;
    }

    getCur() {
        return this.currentEvent;
    }

    setCur(mms: string) {
        this.currentEvent = mms;
    }

    getMis() {
        return this.missionStatement;
    }

    setMis(mms: string) {
        this.missionStatement = mms;
    }

    getSpon() {
        return this.sponsors;
    }

    setSpon(mms: string) {
        this.sponsors = mms;
    }

}
