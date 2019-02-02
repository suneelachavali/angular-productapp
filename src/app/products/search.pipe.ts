import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from './product.model';

@Pipe({
    name: 'search'
})

export class SearchPipe implements PipeTransform{
    transform(value: IProduct[], searchText: string){
        //convert searctText to lowercase 
        searchText = searchText ? searchText.toLowerCase() : null;

        //search by Product Name or Code
        return searchText ? value.filter( 
                                            (product: IProduct) => (product.productName.toLowerCase().indexOf(searchText) !== -1 || 
                                                                    product.productCode.toLowerCase().indexOf(searchText) !== -1)) 
                        : value;
    }
}