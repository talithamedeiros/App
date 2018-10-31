import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Programacao } from './programacao.model';
import { FavoritosService } from '../marcados/marcados.service';


@Injectable()
export class ProgramacaoService {
    url = 'http://localhost:8000/palestras/';

    constructor(private http: HttpClient, private favoritosService: FavoritosService) { }    

    getPalestras(): Observable<Programacao[]> {
        return this.http.get<Programacao[]>(this.url);
    }

    private addFav(programacao: Programacao) {
        this.favoritosService.insert(programacao);
    }

    private rmFav(key: string) {
        this.favoritosService.remove(key);
    }
    
}