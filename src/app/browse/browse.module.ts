import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { BrowseComponent } from "./browse.component";
import { MsgService } from "../shared/notes.service";
import { EditComponent } from "./edit/edit.component";
import { GlobalService } from "../globals/global.service";
import { fromEventPattern } from "rxjs";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        CommonModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "default" },
            { path: "default", component: BrowseComponent},
            { path: "edit", component: EditComponent }
        ])
    ],
    providers: [
        MsgService,
        GlobalService,
        { provide: ErrorHandler},
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    declarations: [
        BrowseComponent, EditComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BrowseModule { }
