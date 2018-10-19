import { Component, OnInit } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';


@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  messages: Observable<Message[]>;
  formValue: string;
  hideChat: boolean;

  constructor(public chat: ChatService) { }

  ngOnInit() {
    this.hideChat = false;

    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
  	if (this.formValue && this.formValue.trim()) {
  	  this.chat.converse(this.formValue);
      this.formValue = '';
    }  
  }

  toggleChat() {
	this.hideChat = !this.hideChat;
	setTimeout( ()=> {
      document.getElementById('input').focus();
    }, 0);
  }

}