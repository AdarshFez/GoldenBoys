import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { RouterExtensions } from "nativescript-angular/router";

import { LoginComponent } from "./login.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { DataService } from "../shared/data.service";
import { HomeComponent } from "../home/home.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        RouterExtensions
    ],
    declarations: [
        LoginComponent, DataService, HomeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
