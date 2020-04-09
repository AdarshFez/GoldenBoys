import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { DataService } from "../../shared/data.service";
import { DataItem } from "../../shared/data.supply";
import { GlobalService } from "../../globals/global.service";
import { TextField } from "tns-core-modules/ui/text-field";
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
        private _routerExtensions: RouterExtensions,
        private _globals: GlobalService
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
        this.admin = this._globals.isAdmin();
        return this.admin;

    }

    becAdmin() {
        this._globals.setAdmin();
        this.admin = this._globals.isAdmin();
        alert("you are now an admin" + this.admin);
    }

    onReturnPressP(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        const password = textField.text;
        if(this._globals.isMatch(password)){
            this.becAdmin();
        } else {
            alert ("sorry wrong password");
        }
     }
}
