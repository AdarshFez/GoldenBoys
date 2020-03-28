import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { RouterExtensions } from "nativescript-angular/router";

import { ActionComponent } from "./action.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { DataService } from "../shared/data.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        RouterExtensions
    ],
    declarations: [
        ActionComponent, DataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ActionModule { }
