import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import Everlive from 'everlive-sdk';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(
    public navCtrl: NavController
  ) {}

  ngOnInit() {
    const el = new Everlive('<your-api-key>');
    const filter = {};
    el.data('<content-type-name>')
      .get(filter)
      .then(res => console.log(`got ${res.count} items`))
      .catch(err => console.log(`got error: ${err.message}`));
  }
}
