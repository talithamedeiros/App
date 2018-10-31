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
    return this.storage.set(key, programacao);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {
    let favoritos: ProgramacaoList[] = [];

    return this.storage.forEach((value: Programacao, key: string, iterationNumber: Number) => {
      let atividades = new ProgramacaoList();
      atividades.key = key;
      atividades.programacao = value;
      favoritos.push(atividades);
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