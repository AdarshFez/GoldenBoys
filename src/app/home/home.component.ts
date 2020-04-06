import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { DataItem } from "../shared/data.supply";
import { ActionComponent } from "../action/action.component";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
    items: Array<DataItem>;

    constructor(private _itemService: DataService) { }

    ngOnInit(): void {
        this._itemService.onGetData();
        this.items = this._itemService.getItems();
    }

    refreshItems() {
        this._itemService.onGetData();
        this.items = this._itemService.getItems();
    }


}
