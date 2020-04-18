import { NgModule, NO_ERRORS_SCHEMA, ErrorHandler, NgModuleFactoryLoader } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule, NSModuleFactoryLoader } from "nativescript-angular/router";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";

import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ActionComponent } from "../action/action.component";
import { DataService } from "../shared/data.service";
// import { ActionModule } from "../action/action.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "default" },
            { path: "default", component: HomeComponent },
            { path: "item/:id", component: ItemDetailComponent },
            { path: "action", component: ActionComponent }
        ])
    ],
    providers: [
        DataService,
        { provide: ErrorHandler},
        { provide: NgModuleFactoryLoader, useClass: NSModuleFactoryLoader }
    ],
    declarations: [
        HomeComponent,
        ItemDetailComponent,
        ActionComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
