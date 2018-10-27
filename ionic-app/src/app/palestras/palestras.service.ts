import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Palestra } from './palestra.model';

@Injectable()
export class PalestraService {
    url = 'http://localhost:8000/palestras/';

    constructor(private http: HttpClient) { }    

    getPalestras(): Observable<Palestra[]> {
        return this.http.get<Palestra[]>(this.url);
    }
}