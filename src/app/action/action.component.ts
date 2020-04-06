import { Component, OnInit } from "@angular/core";

import { DataService } from "../shared/data.service";
import { DataItem } from "../shared/data.supply";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "actionIt",
    templateUrl: "./action.component.html"
    //styleUrls: ["./action.component.css"]
})
export class ActionComponent {

     name = "";
     item = "";
     address = "";
     time = "";
     phonee = 0;
     deleteNum = 0;
     nim = 0;

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

        alert("If any of the data is not correct fix it before hitting the 'make a donation'");
        alert("The name entered : " + this.name + " The Item entered : " +
        this.item + " The address entered : " + this.address + " The Time entered : " + this.time  + " The Item entered : " + this.phonee);

     }
     onReturnPressD(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.deleteNum = Number(textField.text);
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
     delete(): void {

        if (this.deleteNum <= 1) {
            alert("Sorry Can not delete That one");
        } else {

            this.nim = this.service.getItemNum(this.deleteNum);
            //alert("passed zerooooo" + this.nim);
            if (this.nim === -1) {
                alert("Sorry item does not exist");
                //alert("Sorry item does not exist");
            } else {
                this.service.delete(this.service.getItemNum(this.deleteNum));
                this.service.reorder();
            }
        }
    }


}
