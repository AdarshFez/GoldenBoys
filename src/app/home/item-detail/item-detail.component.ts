import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DataService } from "../../shared/data.service";
import { DataItem } from "../../shared/data.supply";
import { GlobalComponent } from "~/app/globals/global.component";
@Component({
    selector: "ItemDetail",
    templateUrl: "./item-detail.component.html"
})
export class ItemDetailComponent implements OnInit {
    item: DataItem;
    admin = false;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this._route.snapshot.params.id;
        this.item = this._data.getItem(id);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    getAdmin(): boolean {
        return this.admin;
    }

    checkAdmin(): boolean {
        this.admin = this.getAdmin();
        return this.admin;
    }
}
