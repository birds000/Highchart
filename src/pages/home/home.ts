import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  amount:number[] = [ 5,2,9,3,1 ];

  constructor(public navCtrl: NavController) {
    
  }

}