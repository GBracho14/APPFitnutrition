import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import {TabsComponent} from '../share/componentes/tabs/tabs.component';
import { LogoComponent } from './componentes/logo/logo.component';





@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  declarations: [TabsComponent, LogoComponent],
  exports: [
    TabsComponent, LogoComponent
  ],
})
export class shareModule {}
