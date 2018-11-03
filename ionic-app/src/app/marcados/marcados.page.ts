import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { FavoritosService, ProgramacaoList } from '../marcados/marcados.service';
import { ToastController, NavController, Events } from '@ionic/angular';

@Component({
  selector: 'app-marcados',
  templateUrl: './marcados.page.html',
  styleUrls: ['marcados.page.scss']
})
export class MarcadosPage {
  favoritos: ProgramacaoList[];
  isFirstLoad = false;

  constructor(
    private favoritosService: FavoritosService,
    private toastCtrl: ToastController,
    public navCtrl: NavController) { }

  ionViewWillEnter() {
    this.favoritosService.getAll()
      .then((result) => {
        this.favoritos = result;
      });
  }

  atualizar(){
    this.ionViewWillEnter();
  }

  async removeFav(item: ProgramacaoList) {
    this.favoritosService.remove(item.key);
    var index = this.favoritos.indexOf(item);
    this.favoritos.splice(index, 1);
    let toast = await this.toastCtrl.create({
      message: 'Atividade removida dos favoritos.',
      duration: 3000,
      position: 'top'
    });
    await toast.present();
  }
}