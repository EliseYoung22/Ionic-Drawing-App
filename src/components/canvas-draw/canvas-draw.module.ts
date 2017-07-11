import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { CanvasDrawComponent } from './canvas-draw';

@NgModule({
  declarations: [
    CanvasDrawComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    CanvasDrawComponent
  ]
})
export class CanvasDrawComponentModule {}
