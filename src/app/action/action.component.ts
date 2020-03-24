import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/dataS.service";
import { DataItem } from "../shared/data.supply";

@Component({
    selector: "actionIt",
    templateUrl: "./action.component.html",
    styleUrls: ["./action.component.css"]
})
export class ActionComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this.items = this._itemService.getItems();
    }
}
