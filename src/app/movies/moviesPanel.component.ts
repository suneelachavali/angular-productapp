import { Component, OnInit } from '@angular/core';
import { MoviesService } from './movies.service';
import { IMovie } from './movie.model';

@Component ({
    templateUrl: './moviesPanel.component.html'
})

export class MoviesPanelComponent{

    movies: IMovie[];
    selectedMovie: IMovie;

    constructor(private _movies:MoviesService){}

    ngOnInit(): void{
        this._movies.getMovies()
            .subscribe((data: IMovie[]) => {this.movies = data;
                                            this.selectedMovie = data[0]});
    
    }

    //Get Movie details for selected movie
    displayMovieDetails(selectedMovieName: string): void{
        this.selectedMovie = selectedMovieName ? this.movies.filter((movie: IMovie) => (movie.name.indexOf(selectedMovieName) !== -1))[0] : this.movies[0];
    }
}