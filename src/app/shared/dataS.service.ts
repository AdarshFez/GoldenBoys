import { Injectable } from "@angular/core";

import { HttpClient } from "@angular/common/http";
import { DataItem } from "./data.supply";

//export interface DataItem {}
//     id: number;
//     name: string;
//     description: string;
//     address: string;
//     time: number;
//     phone: number;

// }

@Injectable({
    providedIn: "root"
})
export class DataService {



    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Jim John",
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

    constructor(private http: HttpClient) {}

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }

    makeItem(nam: string, des: string, add: string, tim: number, phone: number): void {
        // tslint:disable-next-line: no-object-literal-type-assertion
        const temp = <DataItem>{};
        temp.name = nam;
        temp.description = des;
        temp.address = add;
        temp.time = tim;
        temp.phone = phone;
        //const temp =  (1, nam, des, add, tim, phone );
        //<DataItem> = (1 , nam , des ; add ; tim ; phone);
        this.http.put("https://goldenboys-be087.firebaseio.com/supplies.json", temp);
       }
}
