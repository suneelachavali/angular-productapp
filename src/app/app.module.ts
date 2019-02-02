import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { OrderComponent } from './orders/order.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './shared/NotFound.Component';
import { ProductModule } from './products/product.module';
import { MoviesModule } from './movies/movies.module';
import { MusicModule } from './music/music.module';

@NgModule({

    //We declare all components and pipes here
    declarations: [
        AppComponent,
        OrderComponent,
        HomeComponent,
        NotFoundComponent,
    ],

    //we import all modules here
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
            {path: 'orders', component: OrderComponent},
            {path: 'home', component: HomeComponent},
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: '**', component: NotFoundComponent},
        ]),
        HttpClientModule,
        ProductModule,
        MoviesModule,
        MusicModule
    ],

    //Only first component goes here
    bootstrap: [
        AppComponent
    ],

    //all services will go here
    providers: [
    ]

})

export class AppModule{

}