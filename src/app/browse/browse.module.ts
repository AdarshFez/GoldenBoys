import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { BrowseComponent } from "./browse.component";
import { MsgService } from "../shared/notes.service";
import { ActionComponent } from "../action/action.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "default" },
            { path: "default", component: BrowseComponent}
        ])
    ],
    providers: [
        MsgService,
        { provide: ErrorHandler},
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    declarations: [
        BrowseComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
