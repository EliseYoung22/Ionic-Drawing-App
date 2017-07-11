import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CanvasDrawComponent } from '../../components/canvas-draw/canvas-draw';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
