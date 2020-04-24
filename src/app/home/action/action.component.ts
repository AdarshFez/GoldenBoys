import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DataService } from "../../shared/data.service";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { convertString } from "tns-core-modules/utils/utils";
import { isString, isNumber } from "tns-core-modules/utils/types";
import { GlobalService } from "~/app/globals/global.service";

@Component({
    selector: "actionIt",
    templateUrl: "./action.component.html",
    styleUrls: ["./action.component.css"]
})
export class ActionComponent implements OnInit {

     deleteNum = 0;
     nim = 0;
     form: FormGroup;
     dona = true;
     nameControlValid = true;
     timeControlValid = true;
     phoneControlValid = true;
     addressControlValid = true;
     dateControlValid = true;
     itemControlValid = true;
     deleteControlValid = true;
     @ViewChild("nameEL", null) nameEL: ElementRef <TextField>;
     @ViewChild("itemEL", null) itemEL: ElementRef <TextField>;
     @ViewChild("timeEL", null) timeEL: ElementRef <TextField>;
     @ViewChild("addressEL", null) addressEL: ElementRef <TextField>;
     @ViewChild("phoneEL", null) phoneEL: ElementRef <TextField>;

     minDate: Date = new Date(2020, 3, 23);
     maxDate: Date = new Date(2025, 4, 12);
     date = "";
     month = "";
     day = "0";
     year = 2020;
     error = "";

     constructor(
         private service: DataService,
         private _routerExtensions: RouterExtensions,
         private glob: GlobalService
         ) { }

     ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(null, {updateOn: "blur"}),
            item: new FormControl(null, {updateOn: "change", validators: [Validators.required,
                Validators.minLength(3)]}),
            address: new FormControl(null, {updateOn: "change", validators: [Validators.required,
                    Validators.minLength(3)]}),
            time: new FormControl(null, {updateOn: "change", validators: [Validators.required,
                        Validators.minLength(3)]}),
            phone: new FormControl(null, {updateOn: "change", validators: [Validators.required,
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

        this.date = this.month + "/" + this.day + "/" + this.year;

        const name = this.form.get("name").value;
        const item = this.form.get("item").value;
        const address = this.form.get("address").value;
        const time = this.form.get("time").value;
        const date = this.date;
        const phone = this.form.get("phone").value;

        console.log("the name : " + name + " The Item  : " +
        item + " The address  : " + address + " The Time  : " + "The Date of:" + date
        + time  + " The Item  : " + phone);

        console.log(this.date);
        if (!this.form.valid) {
            alert("form failed");

            return;
        }

        // this.form.reset();
        this.nameControlValid = true;
        this.timeControlValid = true;
        this.phoneControlValid = true;
        this.addressControlValid = true;
        this.dateControlValid = true;
        this.itemControlValid = true;

        if (isString(name)) {
            if (isString(item)) {
                if (isString(address)) {
                    if (isString(time)) {
                        if (isString(date)) {
                            const phon: number = convertString(phone);
                            if (isNumber(phon)) {
                                this.error = "works";
                            } else {
                                this.error = "phone";
                            }
                        } else {
                            this.error = "date";
                        }
                    } else {
                        this.error = "time";
                    }
                } else {
                    this.error = "address";
                }
            } else {
                this.error = "item";
            }
        } else {
            this.error = "name";

        }
        if (this.error !== "works") {
        alert("Check what you entered for" + this.error);

        return;
        }

        this.service.makeItemLocal(name, item, address, date, time, phone);
        alert("A Donations with the name : " + name + " The Item  : " +
        item + " The address  : " + address + "The date of: " + date + " The Time  : "
        + time  + " The Item  : " + phone + "if this looks good hit all set!" + "error" + this.error);
    }
        // get local size
     localsize(): void {
        this.service.localLength();
    }
        // delete number you enter
     delete(): void {

        const del: number = convertString(this.deleteNum);
        if (del <= 1) {
            alert("Sorry Can not delete That one");
            console.log(del);
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

     onDatePickerLoaded(args) {
         console.log(args.value);

    }

     onDateChanged(args) {
        const none = args.value;
    }

     onDayChanged(args) {
        this.day = args.value;
        console.log(args.value);
    }

     onMonthChanged(args) {
        this.month = args.value;
        console.log(args.value);
    }

     onYearChanged(args) {
        this.year = args.value;
        console.log(args.value);
    }

     numberCheck(num: number) {
        return true;
    }

     onSwitch() {
         if (this.glob.isAdmin()) {
                this.dona = !this.dona;
         } else {
             alert("Sorry Only admins can hit that button");
         }
    }

}
