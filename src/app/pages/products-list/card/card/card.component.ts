import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../../../../shared/products/product.interface';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent {
    @Output()
    private readonly notifyParent = new EventEmitter<Event>();

    @Input()
    product: Product | undefined;

    createArray(count: number | undefined): number[] {
        return count ? Array.from({length: count}, (_, i) => i + 1) : [];
    }

    onBuyButtonClick(event: Event): void {
        this.notifyParent.emit(event);
    }
}
