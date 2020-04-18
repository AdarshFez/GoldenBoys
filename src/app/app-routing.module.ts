import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from "./login/login.component";
// //profileTab:profile/default
// "/(homeTab:home/default//browseTab:browse/default//searchTab:search/default)"
const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    {
        path: "login", component: LoginComponent
    },
    // {
    //     path: "tabs", loadChildren:  "~/app/tabs/tabs.module#TabsModule"
    // }
    {
       path: "tabs", loadChildren: () => import("~/app/tabs/tabs.module").then((m) => m.TabsModule)
    }
    //     path: "home",
    //     component: NSEmptyOutletComponent,
    //     loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule),
    //     outlet: "homeTab"
    // },
    // {
    //     path: "browse",
    //     component: NSEmptyOutletComponent,
    //     loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule),
    //     outlet: "browseTab"
    // },
    // {
    //     path: "search",
    //     component: NSEmptyOutletComponent,
    //     loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule),
    //     outlet: "searchTab"
    // }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
