import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { BrowseComponent } from "../browse.component";
import { GlobalService } from "~/app/globals/global.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from "tns-core-modules/ui/text-field/text-field";

@Component({
  selector: "ns-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
    form: FormGroup;
    emailControlIsValid = true;
    goldMsg = " Press the Refresh Button for the current Messeges ";
    currentEvent = "";
    missionStatement = "";
    sponsors = "";
    admin = false;
    @ViewChild("emailEL", null) emailEL: ElementRef <TextField>;
    constructor(private _routerExtensions: RouterExtensions,
                private glob: GlobalService, private brow: BrowseComponent) { }

    ngOnInit(): void {
        this.goldMsg = this.glob.getGold();
        this.currentEvent = this.glob.getCur();
        this.missionStatement = this.glob.getMis();
        this.sponsors = this.glob.getSpon();
        this.admin = this.glob.isAdmin();

        this.form = new FormGroup({
            email: new FormControl(null, {updateOn: "change", validators:
            [Validators.required, Validators.email]})

        });

        this.form.get("email").statusChanges.subscribe((status) => {
            this.emailControlIsValid = status === "VALID";
        });
    }


    onBackTap(): void {
    //this._routerExtensions.back();
    this._routerExtensions.back();
    this.admin = this.glob.isAdmin();
  }

    checkAgain(){
        this.glob.checkAgain();
    }
    makeAdmin() {
        this.emailEL.nativeElement.focus();
        this.emailEL.nativeElement.dismissSoftInput();
        if (!this.form.valid) {
            alert("Something went wrong, check what was entered");

            return;
        }
        const email = this.form.get("email").value;
        this.emailControlIsValid = true;
        alert(email);
        this.glob.makeAAdmin(email);
    }

    isAdmin() {
        alert(this.glob.isAdmin());
    }

}
