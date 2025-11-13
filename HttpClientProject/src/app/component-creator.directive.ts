import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: 'appComponentCreator',
})
export class ComponentCreator {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
