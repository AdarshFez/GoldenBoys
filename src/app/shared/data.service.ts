import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { DataItem } from "./data.supply";
import { Observable } from "tns-core-modules/ui/page/page";

@Injectable({
    providedIn: "root"
})
export class DataService {

    private url = "https://goldenboys-e429e.firebaseio.com/items.json";

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Jim Johnfggf",
            description: "Toilet Paper",
            address: "3243 dasd",
            time: "4 pm",
            phone: 757474747
        },
        {
            id: 2,
            name: "cornnn John",
            description: "Paper",
            address: "32 sddf",
            time: "8 pm ",
            phone: 4728955
        },
        {
            id: 3,
            name: "ham Jon",
            description: "tooth bursh",
            address: "48 main",
            time: "2 pm",
            phone: 234345
        }

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
        this.http.put(this.url, temp).subscribe();
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

    test(some: string) {
        const some1 = "hello";
        this.http.put(this.url, some1).subscribe();
    }

}
