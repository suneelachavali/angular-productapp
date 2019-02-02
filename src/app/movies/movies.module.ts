import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MoviesService } from './movies.service';
import { MoviesPopupComponent } from './moviesPopup.component';
import { MoviesPanelComponent } from './moviesPanel.component';



@NgModule({
    //components and pipes
    imports: [
        RouterModule.forChild([
            {path: 'moviesPopup', component: MoviesPopupComponent},
            {path: 'moviesPanel', component: MoviesPanelComponent}
         ]),
         SharedModule
    ],

    //modules
    declarations: [
        MoviesPopupComponent,
        MoviesPanelComponent
     ],

    //services
    providers: [
        MoviesService,
    ]
})

export class MoviesModule {

}