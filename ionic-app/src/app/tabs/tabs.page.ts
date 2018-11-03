import { Component, ViewChild } from '@angular/core';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage {

  constructor(public events: Events) { }

  clicado() {
    console.log('publicando evento');
    this.events.publish('addfav', 'adicionado favorito');
  }
}
