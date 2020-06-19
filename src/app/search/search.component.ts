import { Component } from "@angular/core";
import { device, screen, isAndroid, isIOS } from "tns-core-modules/platform";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
    // styleUrls: ["./search.component.css"]
})
export class SearchComponent {
    menuIsOpen: boolean = false;
    devHeight = screen.mainScreen.heightPixels;
    devWidth = screen.mainScreen.widthPixels;

    toggleMenu() {
        this.menuIsOpen = !this.menuIsOpen;

        alert (this.devHeight) ;
    }
}
