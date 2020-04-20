import { Component, OnInit } from "@angular/core";

import { ActivatedRoute, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  selector: "ns-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {


  constructor( private _routerExtensions: RouterExtensions) { }

  ngOnInit(): void {
  }

  onBackTap(): void {
    //this._routerExtensions.back();
    this._routerExtensions.back();
}

}
