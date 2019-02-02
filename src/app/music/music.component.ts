import { Component, OnInit } from '@angular/core';
import { MusicService } from './music.service';
import { IMusic } from './music.model';

@Component ({
    templateUrl: './music.component.html'
})

export class MusicComponent{

    music: IMusic[];
    selectedMusic: IMusic;

    constructor(private _music:MusicService){}

    ngOnInit(): void{
        this._music.getMovies()
            .subscribe((data: IMusic[]) => {this.music = data;
                                            this.selectedMusic = data[0]});
    
    }

    //Get Movie details for selected movie
    //displayMovieDetails(selectedMovieName: string): void{
    //    this.selectedMovie = selectedMovieName ? this.movies.filter((movie: IMovie) => (movie.name.indexOf(selectedMovieName) !== -1))[0] : this.movies[0];
    //}
}