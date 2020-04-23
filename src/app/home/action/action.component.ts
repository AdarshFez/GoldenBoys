import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DataService } from "../../shared/data.service";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "actionIt",
    templateUrl: "./action.component.html",
    styleUrls: ["./action.component.css"]
})
export class ActionComponent implements OnInit {

     deleteNum = 0;
     nim = 0;
     form: FormGroup;
     nameControlValid = true;
     timeControlValid = true;
     phoneControlValid = true;
     addressControlValid = true;
     itemControlValid = true;
     @ViewChild("nameEL", null) nameEL: ElementRef <TextField>;
     @ViewChild("itemEL", null) itemEL: ElementRef <TextField>;
     @ViewChild("timeEL", null) timeEL: ElementRef <TextField>;
     @ViewChild("addressEL", null) addressEL: ElementRef <TextField>;
     @ViewChild("phoneEL", null) phoneEL: ElementRef <TextField>;

     constructor(
         private service: DataService,
         private _routerExtensions: RouterExtensions
         ) { }

     ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(null, {updateOn: "blur"}),
            item: new FormControl(null, {updateOn: "change", validators: [Validators.required,
                Validators.minLength(1)]}),
            phone: new FormControl(null, {updateOn: "change", validators: [Validators.required,
                 Validators.minLength(1)]}),
            time: new FormControl(null, {updateOn: "change", validators: [Validators.required,
                 Validators.minLength(1)]}),
            address: new FormControl(null, {updateOn: "change", validators: [Validators.required,
                 Validators.minLength(10)]})

        });

        this.form.get("name").statusChanges.subscribe((status) => {
            this.nameControlValid = status === "VALID";
        });
        this.form.get("item").statusChanges.subscribe((status) => {
            this.itemControlValid = status === "VALID";
        });
        this.form.get("phone").statusChanges.subscribe((status) => {
            this.phoneControlValid = status === "VALID";
        });
        this.form.get("address").statusChanges.subscribe((status) => {
            this.addressControlValid = status === "VALID";
        });
        this.form.get("time").statusChanges.subscribe((status) => {
            this.timeControlValid = status === "VALID";
        });
        console.log(this.nameControlValid, this.itemControlValid,  this.phoneControlValid,
             this.addressControlValid, this.itemControlValid);
        }

     onBackTap(): void {
        this._routerExtensions.back();
    }

    //  onReturnPressN(args) {
    //     // returnPress event will be triggered when user submits a value
    //     const textField = <TextField>args.object;
    //     this.name = textField.text;
    //  }

    // alert("If any of the data is not correct fix it before hitting the 'make a donation'");

     onReturnPressD(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.deleteNum = Number(textField.text);
     }
        // sends everything
     onSend() {
        this.service.sendAll();

    // alert(email + password);
    }
        // make object locally
        // this.service.makeItemLocal(this.name , this.item, this.address, this.time, this.phonee);
     local() {

        this.nameEL.nativeElement.focus();
        this.addressEL.nativeElement.focus();
        this.timeEL.nativeElement.focus();
        this.phoneEL.nativeElement.focus();
        this.itemEL.nativeElement.focus();
        this.itemEL.nativeElement.dismissSoftInput();


        const name = this.form.get("name").value;
        const item = this.form.get("item").value;
        const address = this.form.get("address").value;
        const time = this.form.get("time").value;
        const phone = this.form.get("phone").value;

        console.log("the name : " + name + " The Item  : " +
        item + " The address  : " + address + " The Time  : "
        + time  + " The Item  : " + phone);
        console.log("second set ");
        console.log("the name : " + this.nameEL + " The Item  : " +
        this.itemEL);

        console.log(this.nameControlValid, this.itemControlValid,  this.phoneControlValid,
            this.addressControlValid, this.itemControlValid);

        if (!this.form.valid) {
            alert("form failed");
            return;
        }

        // this.form.reset();
        this.nameControlValid = true;
        this.timeControlValid = true;
        this.phoneControlValid = true;
        this.addressControlValid = true;
        this.itemControlValid = true;

        this.service.makeItemLocal(name, item, address, time, phone);
        alert("A Donations with the name : " + name + " The Item  : " +
        item + " The address  : " + address + " The Time  : "
        + time  + " The Item  : " + phone + "if this looks good hit all set!");
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
