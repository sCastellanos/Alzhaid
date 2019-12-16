import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AssistanceShowPageRoutingModule } from './assistance-show-routing.module';

import { AssistanceShowPage } from './assistance-show.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssistanceShowPageRoutingModule
  ],
  declarations: [AssistanceShowPage]
})
export class AssistanceShowPageModule {}
