import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { DataItem } from "../shared/data.supply";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "globals",
    templateUrl: "./global.component.html",
    styleUrls: ["./global.component.css"]
})
export class GlobalComponent {
    admin = false;

    private _routerExtensions: RouterExtensions;

    constructor(private service: DataService) { }

    onBackTap(): void {
        this._routerExtensions.back();
    }

    setAdmin() {
        this.admin = true;
    }

    isAdmin(): boolean {
        return this.admin;
    }

}
