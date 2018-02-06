import { Component, OnInit } from '@angular/core';
import { EmailService, IMessage } from "../../email.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  message: IMessage = {};

  constructor(private emailService: EmailService) {
  }

  ngOnInit() {
  }

  sendEmail(message: IMessage) {
    this.emailService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
    }, error => {
      console.log('AppComponent Error', error);
    })
  }

  }

}
