import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'
import { Account } from '../../models/account/account.interface'
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'register-form',
  templateUrl: 'register-form.html'
})
export class RegisterFormComponent {

  account = {} as Account

  constructor(private toast: ToastController, private ofAuth: AngularFireAuth) {

  }
  //för att funktionen svarar med ett promis så använder vi async och await
  async register() {
    try {
      const result = await this.ofAuth.auth.createUserWithEmailAndPassword(this.account.email, this.account.password);
      this.toast.create({
        message: 'Account was successfully created.', //ger oss felmeddelandet 
        duration: 3000,
        position: 'top'
      }).present() //för att visa meddelandet 
      console.log(result)
    }
    catch (e) {
      console.error(e);
      this.toast.create({
        message: e.message, //ger oss felmeddelandet 
        duration: 3000,
        position: 'top'
      }).present() //för att visa meddelandet 
    }
  }

}
