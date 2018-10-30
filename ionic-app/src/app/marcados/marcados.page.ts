import { Component, OnInit } from '@angular/core';
import { Programacao } from '../programacao/programacao.model';

import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-marcados',
  templateUrl: './marcados.page.html',
  styleUrls: ['marcados.page.scss']
})
export class MarcadosPage implements OnInit {
    favoritos : Programacao[] = [];

    constructor(private storage: Storage) { }

    ngOnInit() { 
      this.storage.get('programacao')
            .then(programacao => {
                this.favoritos.push(programacao);
            });
    }
}