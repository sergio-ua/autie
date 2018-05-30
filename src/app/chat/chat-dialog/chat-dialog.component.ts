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

  constructor(public chat: ChatService) { }

  ngOnInit() {
    document.getElementById('input').focus();
    // appends to array after each new message is added to feedSource
    this.messages = this.chat.conversation.asObservable()
        .scan((acc, val) => acc.concat(val) );
  }

  sendMessage() {
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  toggleChat() {
    document.getElementById('close').style.display = 
      document.getElementById('close').style.display !== 'none' ?
      'none' : 'block';  
    document.getElementById('open').style.display = 
      document.getElementById('open').style.display !== 'inline-block' ?
      'inline-block' : 'none';
    document.getElementById('chat').style.display = 
      document.getElementById('chat').style.display !== 'none' ?
      'none' : 'block';
    document.getElementById('input').focus();
  }

}