import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programacao } from './programacao.model';

@Injectable()
export class ProgramacaoService {
    url = 'http://localhost:8000/programacao/';

    constructor(private http: HttpClient) { }    

    getPalestras(): Observable<Programacao[]> {
        return this.http.get<Programacao[]>(this.url);
    }
}