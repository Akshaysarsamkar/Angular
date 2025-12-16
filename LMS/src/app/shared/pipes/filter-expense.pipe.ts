import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterExpense'
})
export class FilterExpensePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
