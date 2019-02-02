import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product.model';

@Component({
    templateUrl: './product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
    id: Number;
    productDetail: IProduct[];


    constructor(private _route: ActivatedRoute,
                private _productSevice: ProductService,
                private _router: Router) {}

    ngOnInit(): void {
        //reading params
        this.id = this._route.snapshot.params['id']; 

        this._productSevice.getProductDetail(this.id)
            .subscribe((data) => this.productDetail = data);

     }

     onBack():void{
        this._router.navigate(['/products']);
     }

}

/* This is to get product detail values from query string, which is not the right thing to do, we shoul get values from api
name: String;
desc: String;
image: String;
//reading query params, 'data' is just a name of variable it can be anything 
this._route.queryParams.subscribe((data) => {this.name = data['name'], this.desc = data['description'], this.image = data['image']}); 
*/
