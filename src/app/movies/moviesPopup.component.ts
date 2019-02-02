import { Component } from '@angular/core';
import { MoviesService } from './movies.service';
import { IMovie } from './movie.model';

@Component ({
    templateUrl: './moviesPopup.component.html'
})

export class MoviesPopupComponent{

    movies: IMovie[];

    constructor(private _movies:MoviesService){}

    ngOnInit(): void{
        this._movies.getMovies()
            .subscribe((data) => this.movies = data);
    }
}