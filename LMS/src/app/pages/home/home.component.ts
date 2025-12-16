import { Component, OnInit, signal } from '@angular/core';
import { ExpenseService } from '../../core/services/expense.service';
import { expence } from '../../core/models/expense.model';
import { FormsModule } from "@angular/forms";
import { CommonModule, SlicePipe } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, SlicePipe, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  totalAmount: number = 0;
  remainingAmount: number = 0;
  totalExpence: number = 0
  allExpenses = signal<expence[]>([])
  categoryWiseAmount = signal<any>([])

  constructor(private expenceService: ExpenseService) { }

  ngOnInit(): void {
    this.totalAmount = this.expenceService.totalAmount();
    let data = JSON.parse(localStorage.getItem('expences') || '[]')
    this.allExpenses.set(data)

    let expenceAmount = data.map((d: expence) => d.amount)
    this.totalExpence = expenceAmount.reduce((sum: number, d: number) => sum + d, 0)

    this.remainingAmount = this.totalAmount - this.totalExpence;

    const getData = this.expenceService.getCategoryWiseExpense();
    this.categoryWiseAmount.set(getData)
    console.log(this.categoryWiseAmount());

    const dayWiseexpence = this.expenceService.getDayWiseExpence();
    console.log({ dayWiseexpence })
  }
}
