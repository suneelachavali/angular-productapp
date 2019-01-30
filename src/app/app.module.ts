import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Components
import { AppComponent } from './app.component';
import { DetailComponent } from './detail.component';
import { ProductComponent } from './products/product.component';

@NgModule({

    //We declare all components and pipes here
    declarations: [
        AppComponent,
        DetailComponent,
        ProductComponent
    ],

    //we import all modules here
    imports: [
        BrowserModule
    ],

    //Only first component goes here
    bootstrap: [
        AppComponent
    ],

    //all services will go here
    providers: []

})

export class AppModule{

}