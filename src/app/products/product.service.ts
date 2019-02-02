import { Injectable } from '@angular/core';
import { IProduct } from './product.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable(

)

export class ProductService{

    private _productUrl = 'https://ngproductsparam.herokuapp.com/api/getProductDetails';

    constructor(private _http:HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl);
    }

    getProductDetail(id): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(`${this._productUrl}?productId=${id}`);
    }

    /* Promise code, need to use Http (not httpclient), not supported from anuglar7.1
    import { Http } from '@angular/http'; delcare in app.module

    getProducts(): Promise<IProduct[]>{
        return this._http.get(this._productUrl)
                   .toPromise()
                   .then((res) => res.json());
    }
    */

}