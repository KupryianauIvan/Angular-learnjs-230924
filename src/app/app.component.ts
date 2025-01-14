import { Component } from "@angular/core";
import { ApplicationConfigMock } from "./shared/application-config-interface/application-config-mock";
import { ApplicationConfig } from "./shared/application-config-interface/application-config";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    // encapsulation: ViewEncapsulation.Emulated,  по дефолту
    // encapsulation: ViewEncapsulation.ShadowDom,  если надо работать с ShadowDom
})
export class AppComponent {
    readonly applicationConfig: ApplicationConfig = ApplicationConfigMock;

    isSidenavOpenedStore = false;

    onMenuClick(event: Event) {
        this.isSidenavOpenedStore = !this.isSidenavOpenedStore;
        console.log("data received in app component", event);
    }
}
