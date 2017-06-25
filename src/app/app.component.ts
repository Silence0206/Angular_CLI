import { Component ,Inject} from '@angular/core';
import {MailService} from "./mail.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello, Angular';
 fontSize = "22"
  onUpdate(id, text) {
    this.mailService.update(id, text);
  }
  constructor(private mailService: MailService,
               @Inject('apiUrl') private apiUrl) {}
               //Inject 装饰器一般用来注入非 Type 类型的对象。
}
