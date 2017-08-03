import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(private toast: ToastController, private navCtrl: NavController) {
  }
  login(event: LoginResponse) {
    if (!event.error) {
      this.toast.create({
        message: 'success! welcome `{$event.result.email}`',
        duration: 3000,
        position: 'top'
      }).present();

      return this.navCtrl.setRoot('ProfilePage');
    }
    else {
      this.toast.create({
        message: event.error.message,
        duration: 30000,
        position: 'top'
      }).present();
    }
  }
}
