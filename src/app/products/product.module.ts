import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductComponent } from './product.component';
import { CasePipe } from './case.pipe';
import { DiscountPipe } from './discount.pipe';
import { SearchPipe } from './search.pipe';
import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import { ProductGuard } from './product.guard';



@NgModule({
    //components and pipes
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductComponent},
            {path: 'products/:id', canActivate:[ProductGuard], component: ProductDetailComponent},
 
         ]),
         SharedModule
    ],

    //modules
    declarations: [
        ProductComponent,
        CasePipe,
        DiscountPipe,
        SearchPipe,
        ProductDetailComponent,
     ],

    //services
    providers: [
        ProductService,
        ProductGuard
    ]
})

export class ProductModule {

}