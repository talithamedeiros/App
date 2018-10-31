import { Component, OnInit } from '@angular/core';
import { FavoritosService, ProgramacaoList } from '../marcados/marcados.service';

@Component({
  selector: 'app-marcados',
  templateUrl: './marcados.page.html',
  styleUrls: ['marcados.page.scss']
})
export class MarcadosPage implements OnInit {
  favoritos: ProgramacaoList[];
  constructor(private favoritosService: FavoritosService) { }

  ngOnInit() {
    this.favoritosService.getAll()
      .then((result) => {
        this.favoritos = result;
      });
  }
}