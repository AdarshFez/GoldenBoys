import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { Item } from "./item";


@Injectable({
    providedIn: "root"
})


export class ItemService {

    private count = 0;
    // { id: 1, name: "Sam Philip", supplies: "paste",addres: "4 clifton park rd, Albany, 12211",time: 4, phone: 8458484848 },
    constructor (private http: HttpClient)
    private items = new Array<Item>(
    );
    addItems ( Name: string, Material: string, address: string, time: string, phone: number ): void {
        const item = {Name, Material, address, time, phone};
        this.http.put('https://goldenboys-e429e.firebaseio.com/items.json', item).subscribe();
            // {Name, Material, address, time, phone});

    }

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(Material: string): Item {
        return this.items.filter((item) => item.supplies === Material)[0];
    }

    getItemCount(): number {
        return this.count;
    }

}
