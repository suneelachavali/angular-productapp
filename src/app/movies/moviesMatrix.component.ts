import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component ({
    templateUrl: './moviesMatrix.component.html'
})

export class MoviesMatrixComponent{

    movies: any[];

    constructor(private _movies:MoviesService){}

    ngOnInit(): void{
        this._movies.getMovies()
            .subscribe((data) => this.movies = data);
    }
}