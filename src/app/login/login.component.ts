import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RouterExtensions } from "nativescript-angular/router";
import { TextField } from "tns-core-modules/ui/text-field";

import { AuthService } from "./login.service";

@Component({
    selector: "login",
    templateUrl: "./login.component.html"
   //styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    email = "saywhat";
    password = "";
    form: FormGroup;
    emailControlIsValid = true;
    passwordControlIsValid = true;
    isLogin = true;
    @ViewChild("passwordEl", {static: false}) passwordEl: ElementRef<TextField>;
    @ViewChild("emailEl", {static: false}) emailEl: ElementRef<TextField>;

    constructor(private router: RouterExtensions, private authService: AuthService) {}

    ngOnInit() {
        this.email = "Enter your email here";
        this.password = "Enter password here";
  }

    onReturnPressE(args) {
    // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.email = textField.text;
        alert(this.email);
    }
    onReturnPressP(args) {
        // returnPress event will be triggered when user submits a value
        const textField = <TextField>args.object;
        this.password = textField.text;
        alert(this.password);
    }

    onSubmit() {
    // this.emailEl.nativeElement.focus();
    // this.passwordEl.nativeElement.focus();
    // this.passwordEl.nativeElement.dismissSoftInput();

    // if (!this.form.valid) {
    //   return;
    // }
    const email = this.email;
    const password = this.password;
    alert(email + password);
    this.emailControlIsValid = true;
    this.passwordControlIsValid = true;
    if (this.isLogin) {
      console.log("Logging in...");
    } else {
      this.authService.signUp(email, password);
    }
    alert("you are logged in");
    //this.router.navigate(["/challenges"]);
  }

    onSwitch() {
    this.isLogin = !this.isLogin;
  }
}
