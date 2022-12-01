import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    this.showMessage()
  }

  async showMessage() {
    const toast = await this.toastCtrl.create({
      message: 'clicou',
      duration: 3000,
    })
    
    toast.present()

  }


}
