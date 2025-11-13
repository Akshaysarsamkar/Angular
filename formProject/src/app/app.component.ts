import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { data } from './userdata';
import { CommonModule } from '@angular/common';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule,ReactiveFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'formProject';

  @ViewChild('form') form!: NgForm;

  selectedQuestion: string = 'pet';
  Selectedgender: string = 'Female';

  gender: string[] = ['Male', 'Female'];

  userdata: data = {
    username: '',
    email: '',
    question: '',
    gender: '',
    address: '',
  };

  showData: boolean = false;

  constructor() {
    console.log(this.selectedQuestion);
  }

  onSubmit(form: NgForm) {
    console.log('form Submmited', form);
    this.showData = true;
    this.userdata.username = form.value.username;
    this.userdata.email = form.value.email;
    this.userdata.question = form.value.question;
    this.userdata.gender = form.value.gender;
    this.userdata.address = form.value.address;
    this.reset();
    console.log(this.userdata);
  }

  onSetDefault() {
    this.form.setValue({
      gender: 'Male',
      address: 'pune',
      question: 'teacher',
      userdata: {
        username: 'default',
        email: '',
      },
    });
  }

  reset() {
    this.form.reset({
      username: '',
      email: '',
      question: 'pet',
      gender: 'Female',
      address: '',
    });
  }
}
