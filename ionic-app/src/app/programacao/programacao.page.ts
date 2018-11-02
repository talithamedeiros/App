import { Component, OnInit } from '@angular/core';
import { Programacao } from './programacao.model';
import { ProgramacaoService } from './programacao.service';

import { ToastController} from '@ionic/angular';

@Component({
    selector: 'app-programacao',
    templateUrl: './programacao.page.html',
    styleUrls: ['programacao.page.scss']
})
export class ProgramacaoPage {
    palestras: Programacao[] = [];

    constructor(private service: ProgramacaoService, private toastCtrl: ToastController) { }

    ionViewWillEnter() {
        this.service.getPalestras()
            .subscribe(palestras => {
                this.palestras = palestras;
            });
    }

    async addFavorito(programacao: Programacao) {
        this.service.addFav(programacao)
        let toast = await this.toastCtrl.create({
            message: 'Minicurso/Palestra adicionada como favorito!',
            duration: 3000,
            position: 'top'
        });
        await toast.present();
    }
}