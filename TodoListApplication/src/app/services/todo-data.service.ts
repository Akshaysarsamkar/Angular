import { Injectable } from '@angular/core';
import { Data } from '../model/data.model';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  data: Data[] = [];
  singleData!: Data[];
  editDetail!: Data[];
  showDetails: boolean = false;
  showEditDetails: boolean = false;

  constructor() {}

  addData(data: Data) {
    this.data.push(data);
  }

  getAllData() {
    return this.data;
  }

  deleteSingleData(id: number) {
    this.data = this.data.filter((d) => d.id !== id);
  }

  showSingleDetails(id: number) {
    this.singleData = this.data.filter((d) => d.id === id);
    this.showDetails = true;
  }

  editSingleDetail(id: number) {
    this.editDetail = this.data.filter((d) => d.id === id);
    this.showEditDetails = true;
  }

  updateDetails(updatedData: Data) {
    const index = this.data.findIndex((d) => d.id === updatedData.id);
    if (index !== -1) {
      this.data[index] = { ...updatedData };
      console.log('✅ Data updated successfully:', this.data[index]);
    }
  }
}
