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
     time = "";
     phonee = 0;

     private _routerExtensions: RouterExtensions;

     constructor(private service: DataService) { }

     onBackTap(): void {
        this._routerExtensions.back();
    }

     onReturnPressN(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.name = textField.text;
     }
     onReturnPressI(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.item = textField.text;
     }
     onReturnPressT(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.time = (textField.text);
     }
     onReturnPressA(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.address = textField.text;
     }
     onReturnPressP(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.phonee = Number(textField.text);

        alert(this.name + this.item + this.address + this.time + this.phonee);
     }
        // sends everything
     onSend() {
        this.service.sendAll();
    }
        // make object serverside
     onTap(): void {
        this.service.makeItem(this.name , this.item, this.address, this.time, this.phonee);
    }
        // make object locally
     local(): void {
        this.service.makeItemLocal(this.name , this.item, this.address, this.time, this.phonee);
    }
        // get local size
     localsize(): void {
     this.service.localLength();
    }
        // delete number you enter
     delete(num: number): void {
        const number = 1;
    }

}
