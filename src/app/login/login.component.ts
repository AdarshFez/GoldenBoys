import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
  moduleId: module.id,
  selector: "ns-tabs",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {

  constructor(private routerExtension: RouterExtensions)  { }

  ngOnInit(): void {
  }

  toTabs() {
    this.routerExtension.navigate(["../tabs"], { clearHistory: true });
  }

}
