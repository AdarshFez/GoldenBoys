import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { RouterExtensions } from "nativescript-angular/router";

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { DataService } from "../shared/data.service";
import { GlobalComponent } from "../globals/global.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptFormsModule,
        RouterExtensions
    ],
    declarations: [
        DataService, GlobalComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class GlobalModule { }
