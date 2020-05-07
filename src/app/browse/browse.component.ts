import { Component, OnInit } from "@angular/core";

import { MsgService } from "../shared/notes.service";
import { GlobalService } from "../globals/global.service";

@Component({
    selector: "Browse",
    templateUrl: "./browse.component.html",
    styleUrls: ["./browse.component.css"]
})
export class BrowseComponent implements OnInit {

    goldMsg = " Press the Refresh Button for the current Messeges ";
    firstTime = true;
    currentEvent = "";
    missionStatement = "";
    sponsors = "";
    menuIsOpen: boolean = false;

    constructor(private service: MsgService , private glob: GlobalService) { }

    ngOnInit(): void {
        this.menuIsOpen = false;
        this.service.onGetData();
        this.glob.setGold(this.service.getData(0));
        this.glob.setCur(this.service.getData(1));
        this.glob.setMis(this.service.getData(2));
        this.glob.setSpon(this.service.getData(3));
        this.goldMsg = this.glob.getGold();
        this.currentEvent = this.glob.getCur();
        this.missionStatement = this.glob.getMis();
        this.sponsors = this.glob.getSpon();
        // Use the "ngOnInit" handler to initialize data for the view.
    }

    toggleMenu() {
        this.menuIsOpen = !this.menuIsOpen;

    }

    getGold() {
        return this.goldMsg;
    }

    setGold(mms: string) {
        this.goldMsg = mms;
    }

    getCur() {
        return this.currentEvent;
    }

    setCur(mms: string) {
        this.currentEvent = mms;
    }

    getMis() {
        return this.missionStatement;
    }

    setMis(mms: string) {
        this.missionStatement = mms;
    }

    getSpon() {
        return this.sponsors;
    }

    setSpon(mms: string) {
        this.sponsors = mms;
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
        this.firstTime = false;
        this.toggleMenu();
    }
}
