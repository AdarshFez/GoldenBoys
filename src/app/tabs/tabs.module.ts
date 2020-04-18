import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptRouterModule, NSEmptyOutletComponent } from "nativescript-angular/router";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { TabsComponent } from "./tabs.component";
// (homeTab:home/default//browseTab:browse/default//searchTab:search/default)
@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forChild([
            {   path: "", redirectTo: "default" },
            {
                path: "default", component: TabsComponent, children: [
                    {
                        path: "home",
                        outlet: "homeTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule)

                    },
                    {
                        path: "browse",
                        outlet: "browseTab",
                        component: NSEmptyOutletComponent,
                        loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule)
                    },
                    {
                        path: "search",
                        component: NSEmptyOutletComponent,
                        outlet: "searchTab",
                        loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule)
                    }
                ]
            }
        ])
    ],
    declarations: [
        TabsComponent
    ],
    providers: [
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class TabsModule { }
