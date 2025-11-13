import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Data } from '../model/data.model';
import { NgIf } from '@angular/common';
import { TodoDataService } from './../services/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adddata',
  imports: [FormsModule, NgIf],
  templateUrl: './adddata.component.html',
  styleUrl: './adddata.component.css',
})
export class AdddataComponent {
  constructor(private todoListService: TodoDataService,private router:Router) {}

  onSubmit(form: NgForm) {
    const id = Math.floor(Math.random() * 1000000);

    console.log(form.value);

    const newData = {
      id: id,
      title: form.value.title,
      desciption: form.value.description,
      date: new Date(),
    };

    console.log(newData);

    this.todoListService.addData(newData);

    form.reset();

    this.router.navigate([''])
  }
}
