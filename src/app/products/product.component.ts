import { Component, OnInit } from '@angular/core';
import { IProduct } from './product.model';
import { ProductService } from './product.service';

@Component ({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent implements OnInit{
    constructor(private _productSevice: ProductService){}

    title: String = '****Product Page****';
    info: String = 'No. of items searched';
    showImage: Boolean = true;
    userInput: String;
    imageWidth: Number = 50;
    products: IProduct[];

    toggleImage(): void {
        this.showImage = !this.showImage; 
    }

    onDataReceive(message: String): void{
        this.title = '~~~~~Product List~~~~~' + message;
    }

    ngOnInit(): void{
        this._productSevice.getProducts()
            .subscribe((data) => this.products = data);

            /* Promise code
            this._productSevice.getProducts()
            .then((data) => this.products = data);
            */
    }
}