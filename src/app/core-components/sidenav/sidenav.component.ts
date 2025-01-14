import { Component, ViewChild } from "@angular/core";
import { MatDrawer } from "@angular/material/sidenav";

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent {
    // @Input() isSidenavOpened = false;
    //
    // @Output() isSidenavOpenedChange = new EventEmitter<boolean>();

    @ViewChild("drawer")
    private readonly drawerComponent: MatDrawer | undefined;

    toggleSidenav(): void {
        // MatDrawer.toggle();

        this.drawerComponent?.toggle();

        // this.isSidenavOpenedChange.emit(!this.isSidenavOpened);
        // this.isSidenavOpened = !this.isSidenavOpened;
    }
}
