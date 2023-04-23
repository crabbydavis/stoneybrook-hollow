import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LearnPageRoutingModule } from './learn-routing.module';

import { LearnPage } from './learn.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LearnPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LearnPage]
})
export class LearnPageModule {}
