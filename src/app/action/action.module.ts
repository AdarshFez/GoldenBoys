import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ActionComponent } from "./action.component";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { DataService } from "../shared/data.service";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule
    ],
    declarations: [
        ActionComponent, DataService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ActionModule { }
