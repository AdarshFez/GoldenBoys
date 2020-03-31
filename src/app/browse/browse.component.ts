import { Component, OnInit } from "@angular/core";

import { MsgService } from "../shared/notes.service";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html"
})
export class BrowseComponent implements OnInit {

    goldMsg = " Press the Refresh Button for the current Messeges ";
    currentEvent = "";
    missionStatement = "";
    sponsors = "";

    constructor(private service: MsgService) { }



    ngOnInit(): void {
        this.service.onGetData();
        // this.goldMsg = this.service.getData(0);
        // this.currentEvent = this.service.getData(1);
        // this.missionStatement = this.service.getData(2);
        // this.sponsors = this.service.getData(3);
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    test() {
        this.service.getData(0);
    }

    length() {
        this.service.getL();
    }

    refresh() {
        this.service.onGetData();
        this.goldMsg = this.service.getData(0);
        this.currentEvent = this.service.getData(1);
        this.missionStatement = this.service.getData(2);
        this.sponsors = this.service.getData(3);
    }
}
