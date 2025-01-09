import { Component } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    // encapsulation: ViewEncapsulation.Emulated,  по дефолту
    // encapsulation: ViewEncapsulation.ShadowDom,  если надо работать с ShadowDom
})
export class AppComponent {}
