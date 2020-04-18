import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ActionComponent } from "../action/action.component";
// import { ActionModule } from "../action/action.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            { path: "", redirectTo: "default" },
            { path: "default", component: HomeComponent },
            { path: "item/:id", component: ItemDetailComponent },
            { path: "action", component: ActionComponent }
        ])
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
