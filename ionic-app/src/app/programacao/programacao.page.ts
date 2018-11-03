import { Component, OnInit } from '@angular/core';
import { Programacao } from './programacao.model';
import { ProgramacaoService } from './programacao.service';

import { ToastController, Events } from '@ionic/angular';
import { FavoritosService } from '../marcados/marcados.service';

@Component({
    selector: 'app-programacao',
    templateUrl: './programacao.page.html',
    styleUrls: ['programacao.page.scss']
})
export class ProgramacaoPage {
    palestras: Programacao[] = [];

    constructor(
        private service: ProgramacaoService,
        private toastCtrl: ToastController,
        private favoritosService: FavoritosService) { }

    ionViewWillEnter() {
        this.service.getPalestras()
            .subscribe(palestras => {
                this.palestras = palestras;
            });
    }

    async addFavorito(programacao: Programacao) {
        this.favoritosService.insert(programacao);
        let toast = await this.toastCtrl.create({
            message: 'Atividade adicionada como favorito.',
            duration: 3000,
            position: 'top'
        });
        await toast.present();
    }
}