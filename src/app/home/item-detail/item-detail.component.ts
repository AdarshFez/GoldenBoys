import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DataService } from "../../shared/data.service";
import { DataItem } from "../../shared/data.supply";
import { GlobalService } from "~/app/globals/global.service";
@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: DataItem;
    admin = false;
    first = false;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions,
        private glob: GlobalService
    ) { }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        this.item = this._data.getItem(id);
        this.admin = this.glob.isAdmin();
        if(id === 1){
            this.first = true;
        }
    }

    onBackTap(): void {
        this._routerExtensions.back();
        this.first = false;
    }
}
