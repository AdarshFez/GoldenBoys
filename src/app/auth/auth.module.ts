import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { fromEventPattern } from "rxjs";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptModule,
        AuthRoutingModule
    ],
    declarations: [
        AuthComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AuthModule { }
