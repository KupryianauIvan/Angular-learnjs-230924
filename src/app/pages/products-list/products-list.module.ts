import {NgModule} from '@angular/core';
import {ProductsListComponent} from './products-list.component';
import {CardModule} from './card/card/card.module';

@NgModule({
    imports: [CardModule],
    declarations: [ProductsListComponent],
    exports: [ProductsListComponent],
})
export class ProductsListModule {}
