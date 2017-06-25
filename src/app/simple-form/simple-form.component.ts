import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
   <div>
   {{message}}
       <input #myInput type="text" [(ngModel)]="message"
       [ngClass]="{mousedown1: isMousedown}"
      (mousedown)="isMousedown = true"
      (mouseup)="isMousedown = false"
      (mouseleave)="isMousedown = false">
     <button (click)="update.emit({text: message})">更新</button>
    </div>
  `,
  styles: [
    `
     :host { margin: 10px; }
   .mousedown1 { border: 2px solid green; }
   input:focus { font-weight: bold;}
    `
  ]
})
export class SimpleFormComponent implements OnInit {
 @Input() message: string;
  constructor() { }
  onClick(event, value) {
    console.log(event);
    console.log(value);
  }
  onEnter(event, value) {
    console.log(event);
    console.log(value);
  }
  @Output() update = new EventEmitter<{text: string}>();
  isMousedown: boolean;

  ngOnInit() {
  }

}
