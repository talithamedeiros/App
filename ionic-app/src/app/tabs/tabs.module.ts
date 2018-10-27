import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { HomePageModule } from '../home/home.module';
import { ProgramacaoPageModule } from '../programacao/programacao.module';
import { MarcadosPageModule } from '../marcados/marcados.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    HomePageModule,
    ProgramacaoPageModule,
    MarcadosPageModule    
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
