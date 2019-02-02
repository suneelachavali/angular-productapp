import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { MusicService } from './music.service';
import { MusicComponent } from './music.component';


@NgModule({
    //components and pipes
    imports: [
        RouterModule.forChild([
            {path: 'music', component: MusicComponent}
         ]),
         SharedModule
    ],

    //modules
    declarations: [
        MusicComponent
     ],

    //services
    providers: [
        MusicService,
    ]
})

export class MusicModule {

}