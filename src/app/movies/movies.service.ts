import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from './movie.model';

@Injectable(

)

export class MoviesService{

    private _movieUrl = 'https://ngmovies.herokuapp.com/api/getMovies';

    constructor(private _http:HttpClient) {}

    getMovies(): Observable<IMovie[]> {
        return this._http.get<IMovie[]>(this._movieUrl);
    }


}