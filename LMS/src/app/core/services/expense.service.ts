import { Injectable, signal } from '@angular/core';
import { CategoryData, expence } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  allExpenses = signal<expence[]>([])
  totalAmount = signal<number>(50000)
  remainingAmount = signal<number>(this.totalAmount())

  constructor() {
    this.getAllExpenses()
  }

  getAllExpenses() {
    const data = JSON.parse(localStorage.getItem('expences') || '[]')
    this.allExpenses.set(data)
  }

  addExpences(data: expence) {
    const updatedList = [...this.allExpenses(), data];
    this.allExpenses.set(updatedList);
    localStorage.setItem('expences', JSON.stringify(updatedList));
  }

  getCategoryWiseExpense() {
    let expenseAmount = this.allExpenses().map((d: expence) => ({
      amount: d.amount,
      category: d.category
    }));
    let categoryWiseAmount: any = {};
    for (let expense of expenseAmount) {
      if (!categoryWiseAmount[expense.category]) {
        categoryWiseAmount[expense.category] = 0;
      }
      categoryWiseAmount[expense.category] += expense.amount;
    }
    return Object.entries(categoryWiseAmount).map(([category, amount]) => ({
      category,
      amount
    }));
  }

  findHighestSpendingCategory() {
    const categoryList = this.getCategoryWiseExpense();
    return categoryList.reduce((prev: any, curr: any) =>
      curr.amount > prev.amount ? curr : prev
    );
  }



  getDayWiseExpence() {
    let expenseAmount = this.allExpenses().map((d: expence) => ({
      amount: d.amount,
      date: d.date
    }));
    let categoryWiseAmount: any = {};
    for (let expense of expenseAmount) {
      if (!categoryWiseAmount[expense.date]) {
        categoryWiseAmount[expense.date] = 0;
      }
      categoryWiseAmount[expense.date] += expense.amount;
    }
    return Object.entries(categoryWiseAmount).map(([category, amount]) => ({
      category,
      amount
    }));
  }


  totalSpendAmount() {
    return this.getCategoryWiseExpense()
      .reduce((total, item) => total + Number(item.amount), 0);
  }

  downloadCSV(filename: string, rows: any[]) {
    if (!rows || rows.length === 0) return;

    const header = Object.keys(rows[0]).join(',');
    const csvRows = rows.map(row =>
      Object.values(row).map(val => `"${val}"`).join(',')
    );

    const csvContent = [header, ...csvRows].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');

    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }





}
