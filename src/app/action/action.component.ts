import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { DataItem } from "../shared/data.supply";

@Component({
    selector: "actionIt",
    templateUrl: "./action.component.html",
    styleUrls: ["./action.component.css"]
})
export class ActionComponent {
    items: Array<DataItem>;

    constructor(private service: DataService) { }

    onTap(nam: string, des: string , addr: string, tim: number, phone: number): void {
        this.service.makeItem(nam , des , addr, tim, phone);
    }

    onSend() {
        this.service.sendAll();
    }

    getLength(): number {
        return this.items.length;
    }

    onTap2(nam: string, des: string , addr: string, tim: number, phone: number): void {
        this.service.makeItemLocal(nam , des , addr, tim, phone);
    }

    onRefresh() {
        // this.items = <unknown> this.service.refresh();
    }
}
