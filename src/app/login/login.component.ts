import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { DataItem } from "../shared/data.supply";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.css"]
})
export class LoginComponent {

    //  name = "";

    //  private _routerExtensions: RouterExtensions;

    //  constructor(private service: DataService) { }

    //  onBackTap(): void {
    //     this._routerExtensions.back();
    // }

    //  onReturnPressN(args) {
    //     // returnPress event will be triggered when user submits a value
    //     const textField = <TextField>args.object;
    //     this.name = textField.text;
    //  }

}
