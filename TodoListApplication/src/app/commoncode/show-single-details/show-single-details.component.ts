import { CommonModule, DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TodoDataService } from './../../services/todo-data.service';
import { Data } from '../../model/data.model';

@Component({
  selector: 'app-show-single-details',
  imports: [CommonModule,DatePipe],
  templateUrl: './show-single-details.component.html',
  styleUrl: './show-single-details.component.css',
})
export class ShowSingleDetailsComponent implements OnInit {

  @Input() singleData!:Data[];

  @Output() close = new EventEmitter<void>()
  constructor(private todoDataService: TodoDataService) {}


  ngOnInit(): void {
    console.log(this.singleData)
  }

  onClose(){
     this.close.emit()
  }

}
