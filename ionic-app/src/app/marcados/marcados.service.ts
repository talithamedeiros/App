import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { DatePipe } from '@angular/common';
import { Programacao } from '../programacao/programacao.model';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(private storage: Storage, private datepipe: DatePipe) { }

  public insert(programacao: Programacao) {
    let key = this.datepipe.transform(new Date(), "ddMMyyyyHHmmss");
    return this.save(key, programacao);
  }

  private save(key: string, programacao: Programacao) {
    console.log('salvou');
    return this.storage.set(key, programacao);
  }

  public remove(key: string) {
    console.log('removeu');
    return this.storage.remove(key);
  }

  public getAll() {
    let favoritos: ProgramacaoList[] = [];

    return this.storage.forEach((value: Programacao, key: string, iterationNumber: Number) => {
      let programacao = new ProgramacaoList();
      programacao.key = key;
      programacao.programacao = value;
      favoritos.push(programacao);
    })
      .then(() => {
        return Promise.resolve(favoritos);
      })
      .catch((error) => {
        return Promise.reject(error);
      });    
  }
}

export class ProgramacaoList {
  key: string;
  programacao: Programacao;
}