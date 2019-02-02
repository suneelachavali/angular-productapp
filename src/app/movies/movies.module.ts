import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MoviesService } from './movies.service';
import { MoviesComponent } from './movies.component';
import { MoviesMatrixComponent } from './moviesMatrix.component';


@NgModule({
    //components and pipes
    imports: [
        RouterModule.forChild([
            {path: 'movies', component: MoviesComponent},
            {path: 'moviesMatrix', component: MoviesMatrixComponent}
         ]),
         SharedModule
    ],

    //modules
    declarations: [
        MoviesComponent,
        MoviesMatrixComponent
     ],

    //services
    providers: [
        MoviesService,
    ]
})

export class MoviesModule {

}