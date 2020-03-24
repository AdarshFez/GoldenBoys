import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DataService } from "../../shared/dataS.service";
import { DataItem } from "../../shared/data.supply";

@Component({
    selector: "SupliesDetail",
    templateUrl: "./supplies-detail.component.html"
})
export class SuppliesComponent implements OnInit {
    supplies: DataItem;

    constructor(
        private _data: DataService,
        private _route: ActivatedRoute,
        private _routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const name = +this._route.snapshot.params.name;
        this.supplies = this._data.getItem(name);
    }

    onBackTap(): void {
        this._routerExtensions.back();
    }
}
