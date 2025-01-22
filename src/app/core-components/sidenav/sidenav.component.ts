import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    DoCheck,
    inject,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from "@angular/core";
import {MatDrawer} from "@angular/material/sidenav";
import {interval} from "rxjs";
import {HeaderComponent} from "../header/header.component";

type TemplateRefType = {
    $implicit: string;
    name: string;
};

@Component({
    selector: "app-sidenav",
    templateUrl: "./sidenav.component.html",
    styleUrls: ["./sidenav.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidenavComponent implements OnInit {
    @ContentChild("navigationList", {read: TemplateRef, static: true, descendants: true})
    private readonly NavigationListTemplate: TemplateRef<TemplateRefType> | undefined;

    @ViewChild("viewport", {read: ViewContainerRef, static: true})
    private readonly viewport: ViewContainerRef | undefined;

    @ViewChild(MatDrawer, {static: true})
    private readonly drawerComponent: MatDrawer | undefined;

    private readonly cdr = inject(ChangeDetectorRef);

    intervalCount = 0;

    constructor() {
        this.cdr.detach();

        interval(0).subscribe(value => {
            this.intervalCount = value;

            this.cdr.detectChanges();
            // this.cdr.markForCheck();
        });
    }

    ngOnInit(): void {
        if (this.NavigationListTemplate) {
            this.insertNavigation(this.NavigationListTemplate);
        }
    }

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
        this.cdr.markForCheck();
    }

    private insertNavigation(navigationListTemplate: TemplateRef<TemplateRefType>): void {
        this.viewport?.clear();
        this.viewport?.createEmbeddedView(navigationListTemplate, {
            $implicit: "Ivan",
            name: "This Ivan",
        });
        // this.viewport?.createComponent(HeaderComponent);
    }

    // Trigger on Input change with set

    // @Input() set navigationListTemplate(template: TemplateRef<templateRefType> | undefined) {
    //   if (template) {
    //     this.insertNavigation(template);
    //   }
    // };

    // Trigger on Input change with OnChanges
    // @Input() navigationListTemplate: TemplateRef<unknown> | undefined;
    //
    // ngOnChanges({ navigationListTemplate }: SimpleChanges): void {
    //   if (navigationListTemplate && this.navigationListTemplate) {
    //     this.insertNavigation(this.navigationListTemplate);
    //   }
    //
    //   // if (this.navigationListTemplate && navigationListTemplate) {
    //   //   this.insertNavigation(this.navigationListTemplate);
    //   // }
    //   //
    //   // if (this.navigationListTemplate && navigationListTemplate) {
    //   //   this.viewport?.clear();
    //   // }
    //
    //
    // }
    //
    // ngOnChanges(changes: SimpleChanges): void {
    //   console.log("ngOnChanges");
    // }
    //
    // ngAfterContentInit(): void {
    //   console.log("ngAfterContentInit");
    // }
    //
    // ngAfterContentChecked(): void {
    //   console.log("ngAfterContentChecked");
    // }
    //
    // ngAfterViewInit(): void {
    //   console.log("ngAfterViewInit");
    // }
    //
    // ngAfterViewChecked(): void {
    //   console.log("ngAfterViewChecked");
    // }
    //
    // ngOnDestroy(): void {
    //   console.log("ngOnDestroy");
    // }
}
