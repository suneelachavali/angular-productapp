import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMusic} from './music.model';

@Injectable(

)

export class MusicService{

    private _musicUrl = 'https://ngmusicdb.herokuapp.com/api/getMusic';

    constructor(private _http:HttpClient) {}

    getMovies(): Observable<IMusic[]> {
        return this._http.get<IMusic[]>(this._musicUrl);
    }


}