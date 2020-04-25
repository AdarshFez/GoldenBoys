import { Component } from "@angular/core";

@Component({
    selector: "Search",
    templateUrl: "./search.component.html"
    // styleUrls: ["./search.component.css"]
})
export class SearchComponent {
    menuIsOpen: boolean = false;

    toggleMenu() {
        this.menuIsOpen = !this.menuIsOpen;
        console.log("switch");

    }
}
