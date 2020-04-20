import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { TextField } from "tns-core-modules/ui/text-field/text-field";

import { LoginService } from "./login.service";

@Component({
  moduleId: module.id,
  selector: "ns-tabs",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
    form: FormGroup;
    emailControlIsValid = true;
    passwordControlIsValid = true;
    isLogin = true;
    isLoading = false;
    @ViewChild("emailEL", null) emailEL: ElementRef <TextField>;
    @ViewChild("passwordEL", null) passwordEL: ElementRef <TextField>;

    constructor(private routerExtension: RouterExtensions, private loginService: LoginService)  { }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, {updateOn: "blur", validators:
            [Validators.required, Validators.email]}),

            password: new FormControl(null, {updateOn: "change", validators:
             [Validators.required, Validators.minLength(6) ]})

        });

        this.form.get("email").statusChanges.subscribe((status) => {
            this.emailControlIsValid = status === "VALID";
        });

        this.form.get("password").statusChanges.subscribe((status) => {
            this.passwordControlIsValid = status === "VALID";
        });
    }

    toTabs() {
        this.routerExtension.navigate(["../tabs"], { clearHistory: true });
    }

    onSwitch() {
        this.isLogin = !this.isLogin;
    }

    onSubmit() {
        this.passwordEL.nativeElement.focus();
        this.emailEL.nativeElement.focus();
        this.passwordEL.nativeElement.dismissSoftInput();

        if (!this.form.valid) {
            return;
        }
        const email = this.form.get("email").value;
        const password = this.form.get("password").value;
        //this.form.reset();
        this.emailControlIsValid = true;
        this.passwordControlIsValid = true;
        this.isLoading = true;
        if (this.isLogin){
            this.loginService.logIn(email, password)
            .subscribe((resData) => {
                this.isLoading = false;
                this.routerExtension.navigate(["../tabs"], { clearHistory: true });
            }, (err) => {
                alert("Please Check log-in info")
                console.log(err);
                this.isLoading = false;
            });
        } else {

            this.loginService.signUp(email, password).subscribe((resData) => {
                this.isLoading = false;
            });
        }
        //alert(email + password);
    }
}
