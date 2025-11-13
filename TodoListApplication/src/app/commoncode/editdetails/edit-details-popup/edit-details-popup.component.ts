import { Component, EventEmitter, Output } from '@angular/core';
import { Data } from '../../../model/data.model';
import { TodoDataService } from './../../../services/todo-data.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-details-popup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-details-popup.component.html',
  styleUrl: './edit-details-popup.component.css',
})
export class EditDetailsPopupComponent {
  editableData!: Data;

  @Output() close = new EventEmitter<void>();

  constructor(private todoDataService: TodoDataService) {
    const original = this.todoDataService.editDetail[0];
    this.editableData = { ...original };
  }

  onClose() {
    this.close.emit();
  }
  onUpdate() {
    this.todoDataService.updateDetails(this.editableData);
    this.onClose();
  }
}
