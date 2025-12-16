import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ExpenseService } from '../../core/services/expense.service';
import { SuccessMessageComponent } from "../../shared/popup/success-message/success-message.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-expense',
  imports: [FormsModule, CommonModule, SuccessMessageComponent],
  templateUrl: './add-expense.component.html',
  styleUrl: './add-expense.component.css'
})
export class AddExpenseComponent {

  id: number = 0;
  amount: number = 0;
  category: string = '';
  note: string = '';
  date!: Date;
  message: string = '';
  showMessage: boolean = false;



  constructor(private expenceService: ExpenseService, private route: Router) { }

  onSubmit(formValue: NgForm) {

    const expenseData = {
      ...formValue.value,
      id: crypto.randomUUID(),
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-')
    };
    console.log({ expenceData: expenseData });
    this.expenceService.addExpences(expenseData)
    this.showMessage = true
    formValue.reset()
    // this.route.navigate(['dashboard'])

  }

  closePopup() {
    this.showMessage = false
    this.route.navigate(['/home'])
  }

}
