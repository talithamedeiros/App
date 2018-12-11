import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programacao } from '../models/Programacao.model';

@Injectable()
export class ProgramacaoService {
    url = 'https://api-iftech.herokuapp.com/programacao/';

    constructor(private http: HttpClient) { }    

    getPalestras(): Observable<Programacao[]> {
        return this.http.get<Programacao[]>(this.url);
    }
}