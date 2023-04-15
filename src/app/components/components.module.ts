import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { LoadingComponent } from './loading/loading.component';
import { WebHeaderComponent } from './web-header/web-header.component';

@NgModule({
  imports: [
    IonicModule,
  ],
  declarations: [LoadingComponent, WebHeaderComponent],
  exports: [LoadingComponent, WebHeaderComponent]
})
export class ComponentsModule {}
