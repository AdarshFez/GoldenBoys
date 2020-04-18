import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "ns-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements OnInit {

  constructor(
    private routerExtension: RouterExtensions,
    private activeRoute: ActivatedRoute) {
}

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    //this.routerExtension.navigate([{ outlets: { playerTab: ["players"], teamTab: ["teams"], donationsTab: ["donations"] } }], { relativeTo: this.activeRoute });
    // tslint:disable-next-line: max-line-length
    this.routerExtension.navigate([{ outlets: {  homeTab: ["home"], browseTab: ["browse"], searchTab: ["search"] } }], { relativeTo: this.activeRoute });
    //, browseTab: ["default"], searchTab: ["default"]
    // homeTab: ["home"],
    //  browseTab: ["browse"]
}

}
