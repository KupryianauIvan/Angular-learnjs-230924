import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
    title = "Angular-learnjs-230924";
    imgSrc = "../../favicon.ico";

    onClick(event: Event) {
        event.stopPropagation();
        console.log("Clicked;", event);
    }
}
