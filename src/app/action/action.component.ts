import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { DataItem } from "../shared/data.supply";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "actionIt",
    templateUrl: "./action.component.html",
    styleUrls: ["./action.component.css"]
})
export class ActionComponent {

     name = "";
     item = "";
     address = "";
     time = 0;
     phonee = 0;
     number = 0;

     private _routerExtensions: RouterExtensions;

     constructor(private service: DataService) { }

     onBackTap(): void {
        this._routerExtensions.back();
    }

     onReturnPressN(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.name = textField.text;
        this.number++;
     }
     onReturnPressI(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.item = textField.text;
        this.number++;
     }
     onReturnPressT(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.time = Number(textField.text);
        this.number++;
     }
     onReturnPressA(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.address = textField.text;
        this.number++;
     }
     onReturnPressP(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.phonee = Number(textField.text);
        this.number++;

        alert(this.name + this.item + this.address + this.time + this.phonee);
     }
     onSend() {
        this.service.sendAll();
    }
     onTap(): void {
        this.service.makeItem(this.name , this.item, this.address, this.time, this.phonee);
    }

     onTap2(): void {
        this.service.makeItemLocal(this.name , this.item, this.address, this.time, this.phonee);
    }

}
