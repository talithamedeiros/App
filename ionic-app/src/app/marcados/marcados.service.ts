import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Programacao } from '../programacao/programacao.model';
import { Events } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FavoritosService {

  constructor(private storage: Storage, private events: Events) { }

  async insert(programacao: Programacao) {
    this.storage.get(programacao.palestrante).then((data) => {
      if (data == null) {
        return this.save(programacao.palestrante, programacao);
      } else {
        console.log('Atividade já foi adicionada.');
      }
    })
  }

  private save(key: string, programacao: Programacao) {
    return this.storage.set(key, programacao);
  }

  public remove(key: string) {
    return this.storage.remove(key);
  }

  public getAll() {
    let favoritos: ProgramacaoList[] = [];

    return this.storage.forEach((value: Programacao, key: string) => {
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