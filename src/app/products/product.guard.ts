import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';

@Injectable(

)

export class ProductGuard implements CanActivate{
    constructor(private _router:Router) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const id =  +route.url[1].path;
        if(isNaN(id) || id < 1){
            alert('Invalid Id');
            this._router.navigate(['/products']);
            return false;
        }
        else    
            return true;

    }
}