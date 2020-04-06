import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { ActionComponent } from "../action/action.component";
import { LoginComponent } from "../login/login.component";

const routes: Routes = [
    { path: "default", component: HomeComponent },
    { path: "item/:id", component: ItemDetailComponent },
    { path: "action", component: ActionComponent },
    { path: "login", component: LoginComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
