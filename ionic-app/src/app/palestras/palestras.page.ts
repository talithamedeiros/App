import { Component, OnInit } from '@angular/core';
import { Palestra } from './palestra.model';
import { PalestraService } from './palestras.service';

@Component({
  selector: 'app-palestras',
  templateUrl: './palestras.page.html',
})
export class PalestrasPage implements OnInit {
    palestras: Palestra[] = [];

    constructor(private service: PalestraService) { }

    ngOnInit() { 
        this.service.getPalestras()
                            .subscribe(palestras => {
                                console.log(palestras);
                                this.palestras = palestras;
                            });
    }

}