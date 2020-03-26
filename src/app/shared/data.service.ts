import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { DataItem } from "./data.supply";
import { Observable } from "tns-core-modules/ui/page/page";

@Injectable({
    providedIn: "root"
})
export class DataService {

    private url = "https://goldenboys-be087.firebaseio.com/items";

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Jim Johnfggf",
            description: "Toilet Paper",
            address: "3243 dasd",
            time: 4,
            phone: 757474747
        },
        {
            id: 2,
            name: "cornnn John",
            description: "Paper",
            address: "32 sddf",
            time: 8,
            phone: 4728955
        },
        {
            id: 3,
            name: "ham Jon",
            description: "tooth bursh",
            address: "48 main",
            time: 2,
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

    makeItemLocal(nam: string, des: string, add: string, tim: number, phone: number): void {
        const temp = {id: 0, name: "", description: "", address: "" , time: 0, phone: 0 };
        temp.id = this.items.length;
        temp.name = "nam";
        temp.description = "des";
        temp.address = "add";
        temp.time = 4;
        temp.phone = 444;
        this.items.push(temp);
    }
    makeItem(nam: string, des: string, add: string, tim: number, phone: number): void {
        // tslint:disable-next-line: no-object-literal-type-assertion
        //const temp = <DataItem> {};
        // temp.id = this.items.length;
        // temp.name = nam;
        // temp.description = des;
        nam = "hello";
        // temp.address = add;
        // temp.time = tim;
        // temp.phone = phone;
        //this.temp =  (1, nam, des, add, tim, phone );
        // <DataItem> = (1 , nam , des ; add ; tim ; phone);

        // pull from server? save list then push back?
        this.http.put("https://goldenboys-be087.firebaseio.com/items.json", nam).subscribe();

    }

    sendAll(): void {
        this.http.put("https://goldenboys-be087.firebaseio.com/items.json", this.items).subscribe();
    }

    serverGet(): void {
        const temp = 1 + 1;
    }

    refresh() {

        return this.http.get<{items: DataItem; }>(this.url);
    }

}
