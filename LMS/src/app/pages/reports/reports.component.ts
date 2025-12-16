import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ExpenseService } from '../../core/services/expense.service';
import { Chart } from 'chart.js/auto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit, AfterViewInit {

  spendAmount = 0;
  expenceCount = 0;
  categoryWiseExpence: any;
  chart: any;
  maxSpendingcatogary: any
  avgDailySpending = 0;
  allExpense: any;

  constructor(private expenceService: ExpenseService) { }

  ngOnInit() {
    this.spendAmount = this.expenceService.totalSpendAmount();
    this.expenceCount = this.expenceService.allExpenses().length;
    this.categoryWiseExpence = this.expenceService.getCategoryWiseExpense();
    this.maxSpendingcatogary = this.expenceService.findHighestSpendingCategory()
    const data = this.expenceService.getDayWiseExpence()
    this.allExpense = this.expenceService.allExpenses();
    let totalAmount = 0
    data.forEach((item: any) => {
      const amount = Number(item?.amount) || 0;
      totalAmount += amount;
    });
    this.avgDailySpending = totalAmount / data.length
  }

  ngAfterViewInit() {
    setTimeout(() => this.generateLineChart(), 300);
  }

  generateLineChart() {
    const data = this.expenceService.allExpenses();

    if (!data.length) return;

    const sorted = [...data].sort((a, b) =>
      new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    const labels = sorted.map(item =>
      new Date(item.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })
    );

    const values = sorted.map(item => item.amount);

    if (this.chart) this.chart.destroy();

    this.chart = new Chart('lineChart', {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label: 'Expense Trend',
          data: values,
          borderColor: '#03dac6',
          borderWidth: 2,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  downloadFullTable() {
    this.expenceService.downloadCSV('expenses.csv', this.allExpense);
  }

}
