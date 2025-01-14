import { Component, EventEmitter, Input, Output } from "@angular/core";
import { ApplicationConfig } from "../../shared/application-config-interface/application-config";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
    @Input() applicationConfig: ApplicationConfig | undefined;

    @Output() menuClicked = new EventEmitter<Event>();

    title = "Angular-learnjs-230924";
    imgSrc = "../../favicon.ico";

    onClick(event: Event) {
        event.stopPropagation();
        this.menuClicked.emit(event);

        // console.log("Clicked;", event);
    }
}
