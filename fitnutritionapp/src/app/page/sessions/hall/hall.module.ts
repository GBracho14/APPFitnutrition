import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HallPageRoutingModule } from './hall-routing.module';

import { HallPage } from './hall.page';
import { shareModule } from 'src/app/share/share.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HallPageRoutingModule,
    shareModule
  ],
  declarations: [HallPage]
})
export class HallPageModule {}
