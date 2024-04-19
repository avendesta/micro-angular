import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent-1',
  templateUrl: './parent-1.component.html',
  styleUrl: './parent-1.component.scss'
})
export class Parent1Component {
  receivedMessage: string | null = null; // Initialize as null

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
