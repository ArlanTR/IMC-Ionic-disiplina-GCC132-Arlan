import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  weight: number = 0
  height: number = 0
  imc: number = 0

  constructor(private toastCtrl: ToastController) {}

  onCalculate() {
    this.imc = this.weight / (this.height * this.height)
    this.showIMC()
  }

  async showIMC() {
    const toast = await this.toastCtrl.create({
      message: `IMC = ${this.imc.toFixed(2)}`,
      duration: 3000,
      position: 'top'
    })
    
    toast.present()

  }


}
