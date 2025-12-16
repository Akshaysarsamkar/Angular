import { Component, OnInit, signal } from '@angular/core';
import { expence } from '../../core/models/expense.model';
import { CommonModule } from '@angular/common';
import { ExpenseService } from '../../core/services/expense.service';
import { FormsModule } from '@angular/forms';
import { SuccessMessageComponent } from "../../shared/popup/success-message/success-message.component";

@Component({
  selector: 'app-edit-expense',
  standalone: true,
  imports: [CommonModule, FormsModule, SuccessMessageComponent],
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent {

  expenseList = signal<expence[]>([]);
  editIndex: number | null = null;
  tempData!: expence;
  showMessage: boolean = false
  isRemove: boolean = false
  constructor(private expenceService: ExpenseService) {
    this.loadData()
  }

  loadData() {
    this.expenseList = this.expenceService.allExpenses;
  }

  startEdit(index: number, item: expence) {
    this.editIndex = index;
    this.tempData = { ...item };
  }

  saveEdit(index: number) {
    this.expenseList.update(list => {
      list[index] = { ...this.tempData };
      return [...list];
    });
    localStorage.setItem("expences", JSON.stringify(this.expenseList()));
    this.showMessage = true
    this.editIndex = null;
  }

  cancelEdit() {
    this.editIndex = null;
  }

  deleteEdit(id: string) {
    const afterRemovedata = this.expenseList().filter((data) => data.id !== id)
    localStorage.setItem("expences", JSON.stringify(afterRemovedata));
    this.expenseList.set(JSON.parse(localStorage.getItem("expences") || '[]'))
    this.isRemove = true
  }

  close() {
    this.isRemove = false;
    this.showMessage = false;
  }

}
