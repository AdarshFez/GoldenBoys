import { Injectable } from "@angular/core";

import { Item } from "./item";

@Injectable({
    providedIn: "root"
})


export class ItemService {

    private count = 1;
    private items = new Array<Item>(
        { id: 1, name: "Sam Philip", supplies: "paste",addres: "4 clifton park rd, Albany, 12211",time: 4, phone: 8458484848 },

    );


    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }

    getItemCount(): number {
        return this.count;
    }

}
