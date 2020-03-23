import { Injectable } from "@angular/core";

export interface DataItem {
    id: number;
    name: string;
    description: string;
    address: string;
    time: number;
    phone: number;

}

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
            name: "corn John",
            description: "Paper",
            address: "32 sddf",
            time: 8,
            phone: 4728955
        }

    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }
}
