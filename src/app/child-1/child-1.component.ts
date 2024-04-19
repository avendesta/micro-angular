import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child-1',
  templateUrl: './child-1.component.html',
  styleUrl: './child-1.component.scss'
})
export class Child1Component {
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage(message: string) {
    this.messageEvent.emit(message);
  }
}
