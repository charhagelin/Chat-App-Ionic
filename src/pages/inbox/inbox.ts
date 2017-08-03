import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MESSAGE_LIST } from '../../mocks/messages/messages';
import { Message } from '../../models/message/message.interface';

@IonicPage()
@Component({
  selector: 'page-inbox',
  templateUrl: 'inbox.html',
})
export class InboxPage {

  messageList: Message[] = MESSAGE_LIST;
  //vi säger med : Messages[] att messageList måste vara av typen Message array. 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
     console.log(this.messageList);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InboxPage');
  }
}
