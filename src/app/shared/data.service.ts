import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { DataItem } from "./data.supply";
import { Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root"
})
export class DataService {

    private url = "https://goldenboys-be087.firebaseio.com/items.json";

    // tslint:disable-next-line: variable-name
    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Help Menu",
            description: " Hit Refresh to see current active, Hit Action menu",
            address: "Press the 'Done Hit me' after every entry",
            time: "Then hit 'Make a new Donatoin'",
            phone: 0
        }
        // {
        //     id: 2,
        //     name: "cornnn John",
        //     description: "Paper",
        //     address: "32 sddf",
        //     time: "8 pm ",
        //     phone: 4728955
        // },
        // {
        //     id: 3,
        //     name: "ham Jon",
        //     description: "tooth bursh",
        //     address: "48 main",
        //     time: "2 pm",
        //     phone: 234345
        // }

    );

    constructor(private http: HttpClient) { }

    getItems(): Array<DataItem> {
        return this.items;
    }

    makeId(): number {
        return this.items.length;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }

    makeItemLocal(nam: string, des: string, add: string, tim: string, phone: number): void {
        const temp = {id: 0, name: "", description: "", address: "" , time: "", phone: 0 };
        temp.id = this.items.length;
        temp.name = nam;
        temp.description = des;
        temp.address = add;
        temp.time = tim;
        temp.phone = phone;
        this.items.push(temp);
        alert("made local");
    }
    makeItem(nam: string, des: string, add: string, tim: string, phone: number): void {
        const temp = {id: 0, name: "", description: "", address: "" , time: "", phone: 0 };
        temp.id = this.items.length;
        temp.name = nam;
        temp.description = des;
        temp.address = add;
        temp.time = tim;
        temp.phone = phone;
        this.http.post(this.url, temp).subscribe();
        alert("made Server");

    }

    sendAll(): void {
        this.http.put(this.url, this.items).subscribe();
    }

    serverGet(): void {
        const temp = 1 + 1;
    }

    refresh() {

        return this.http.get<{items: DataItem; }>(this.url);
    }

    localLength() {
        alert(this.items.length);
    }

    getItemNum(num: number): number {
        for (let i = 0; i < this.items.length; i++) {
          if (this.items[i].id === num) {

                return i + 1;

            }
        }
        //alert("not in array returning" + -1);

        return -1;
        }

    delete(location: number) {

        let i = this.items.length;
        const tempitems = new Array<DataItem>();
        while (i > location) {
            tempitems.push(this.items.pop());
            i--;
        }
        this.items.pop();
        i = tempitems.length;
        while (i !== 0) {
            this.items.push(tempitems.pop());
            i--;
        }
        alert(" Its out of here ");
    }

    onGetData(): void {
        this.http.get<Array<DataItem>>(this.url).subscribe((data) => this.items = data);
    }

    reorder() {
        let i = 1;
        while (i <= this.items.length) {
            this.items[i - 1].id = i;
            i++;
        }
    }

}
