import { Component, EventEmitter, Output } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Account } from '../../models/account/account.interface'
import { ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';

@Component({
  selector: 'login-form',
  templateUrl: 'login-form.html'
})
export class LoginFormComponent {

  account = {} as Account
  @Output() logInStatus: EventEmitter<LoginResponse>;

  constructor(private toast: ToastController, private ofAuth: AngularFireAuth, private navCtrl: NavController) {
    this.logInStatus = new EventEmitter<LoginResponse>();
  }
  async login() {
    try {
      const result: LoginResponse = {
        result: await this.ofAuth.auth.signInWithEmailAndPassword(this.account.email, this.account.password)
      }
      this.logInStatus.emit(result);
      // this.toast.create({
      //   message: 'success!',
      //   duration: 3000,
      //   position: 'top'
      // }).present();
    }
    catch (e) {
      console.error(e);
      const error: LoginResponse = {
        error: e
      }
      this.logInStatus.emit(error)
      // this.toast.create({
      //   message: e.message,
      //   duration: 3000,
      //   position: 'top'
      // }).present();
    }
  }

  // navigateToPage(pageName: string) {
  //   pageName === 'TabsPage' ? this.navCtrl.setRoot(pageName) : this.navCtrl.push(pageName);
  // }
}
