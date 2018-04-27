import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    display: boolean;

    constructor(public navCtrl: NavController) {
        this.display = false;
    }

    ionViewDidLoad() {
        setTimeout(() => {
            SwipeCards.init();
            this.display = true;
            console.log('done');
        });
    }

}
