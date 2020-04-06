import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";

import { AuthService } from "./auth.service";

@Component({
  selector: "ns-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"],
  moduleId: module.id
})
export class AuthComponent implements OnInit {
  form: FormGroup;
  emailControlIsValid = true;
  passwordControlIsValid = true;
  isLogin = true;
//   @ViewChild("passwordEl") passwordEl: ElementRef<TextField>;
//   @ViewChild("emailEl") emailEl: ElementRef<TextField>;

  constructor(private router: RouterExtensions, private authService: AuthService) {}

  ngOnInit() {
    const t = 2;

  }
}
