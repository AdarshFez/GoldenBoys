import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { DataService } from "../../shared/data.service";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";
import { DatePicker } from "tns-core-modules/ui/date-picker";
import { convertString } from "tns-core-modules/utils/utils";
import { isString, isNumber } from "tns-core-modules/utils/types";
import { GlobalService } from "~/app/globals/global.service";
import { BrowseComponent } from "../../browse/browse.component";

@Component({
    selector: "actionIt",
    templateUrl: "./action.component.html",
    styleUrls: ["./action.component.css"]
})
export class ActionComponent implements OnInit {

     deleteNum = 0;
     nim = 0;
     notChanged = true;
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
     month = 4;
     day = 23;
     year = 2020;
     error = "";

     constructor(
         private service: DataService,
         private browse: BrowseComponent,
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
        if (this.notChanged) {
        this._routerExtensions.back();
        } else {
            alert("sorry you made an item you have to sync to go back otherwise delete it")
        }
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
        this.notChanged = !this.notChanged;

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

        const namee = this.form.get("name").value;
        const name = " " + namee + " ";
        const itemm = this.form.get("item").value;
        const item = itemm.toString();
        const addresss = this.form.get("address").value;
        const address = addresss.toString();
        const timee = this.form.get("time").value;
        const time = timee.toString();
        const datee = this.date;
        const date = datee.toString();
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

        if (isString(name) && this.notNumberCheck(name)) {
            if (this.stringCheck(item) && this.notNumberCheck(item)) {
                if (this.stringCheck(address) && this.notNumberCheck(address)) {
                    if (this.stringCheck(time) && this.notNumberCheck(time)) {
                        if (this.stringCheck(date) && this.notNumberCheck(date)) {
                            const phon: number = convertString(phone);
                            if (!this.notNumberCheck(phon)) {
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
        alert("Check what you entered for " + this.error);

        return;
        }

        console.log(this.localsize());
        this.service.makeItemLocal(name, item, address, date, time, phone);
        this.notChanged = false;
        alert("A Donations with the name : " + name + " The Item  : " +
        item + " The address  : " + address + "The date of: " + date + " The Time  : "
        + time  + " The Item  : " + phone + "if this looks good hit all set!" + "error" + this.error);
        console.log(this.localsize());
        this.browse.refresh();
    }
        // get local size
     localsize(): void {
        alert(this.service.localLength());
    }

     unLocal() {
        this.service.delete(this.service.localLength());
        this.notChanged = !this.notChanged;
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
                this.notChanged = this.notChanged;

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


     onSwitch() {
         if (this.glob.isAdmin()) {
                this.dona = !this.dona;
         } else {
             alert("Sorry Only admins can hit that button");
         }
    }

     notNumberCheck(num: any) {
            const phon: number = convertString(num);
            if (phon % 2 === 1 || num % 2 === 0) {
                return false;
            } else {
                return true;
        }
    }

     stringCheck(num: any): boolean {
        if (isString(num)) {
            //alert("string");

            return true;
        } else {

            //alert("notString");

            return false;
        }
    }

}
