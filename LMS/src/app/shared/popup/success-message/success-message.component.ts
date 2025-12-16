import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-success-message',
  imports: [],
  templateUrl: './success-message.component.html',
  styleUrl: './success-message.component.css'
})
export class SuccessMessageComponent {

  @Input() message: string = '';
  @Input() show: boolean = false;

  @Output() close = new EventEmitter<void>();

  closePopup() {
    this.close.emit();
  }

}
