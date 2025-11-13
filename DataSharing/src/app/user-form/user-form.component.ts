import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent {
  newFirstName: string = '';
  newLastName: string = '';

  @Output() superUserAdded = new EventEmitter<{
    firstname: string;
    lastname: string;
  }>();
  @Output() adminAdded = new EventEmitter<{
    firstname: string;
    lastname: string;
  }>();

  onAddSuperUser() {
    this.superUserAdded.emit({
      firstname: this.newFirstName,
      lastname: this.newLastName,
    });
  }

  onAddAdmin() {
    this.adminAdded.emit({
      firstname: this.newFirstName,
      lastname: this.newLastName,
    });
  }
}
