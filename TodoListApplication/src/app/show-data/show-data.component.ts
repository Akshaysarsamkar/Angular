import { Component, Input, OnInit } from '@angular/core';
import { TodoDataService } from './../services/todo-data.service';
import { Data } from '../model/data.model';
import { CommonModule, DatePipe, SlicePipe } from '@angular/common';
import { SliceWordPipe } from '../slices/slice-word.pipe';
import { ShowSingleDetailsComponent } from '../commoncode/show-single-details/show-single-details.component';
import { EditDetailsPopupComponent } from '../commoncode/editdetails/edit-details-popup/edit-details-popup.component';

@Component({
  selector: 'app-show-data',
  imports: [
    CommonModule,
    DatePipe,
    SliceWordPipe,
    ShowSingleDetailsComponent,
    EditDetailsPopupComponent,
  ],
  templateUrl: './show-data.component.html',
  styleUrl: './show-data.component.css',
})
export class ShowDataComponent implements OnInit {
  constructor(private readonly todoDataService: TodoDataService) {}

  allDetails: Data[] = [];
  showDetails!: boolean;
  singleData!: Data[];
  editSingleDetails!: boolean;

  ngOnInit(): void {
    this.allDetails = this.todoDataService.getAllData();
  }

  deleteDetails(id: number) {
    this.todoDataService.deleteSingleData(id);
    this.allDetails = this.todoDataService.getAllData();
  }

  showSingleData(id: number) {
    this.todoDataService.showSingleDetails(id);
    this.showDetails = this.todoDataService.showDetails;
    this.singleData = this.todoDataService.singleData;
  }

  onClose() {
    this.showDetails = false;
    this.editSingleDetails = false;
  }

  editSingleData(id: number) {
    this.todoDataService.editSingleDetail(id);
    this.editSingleDetails = this.todoDataService.showEditDetails;
    this.singleData = this.todoDataService.editDetail;
  }
}
