import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceWord'
})
export class SliceWordPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    return value.slice(0,12) + '...';
  }

}
