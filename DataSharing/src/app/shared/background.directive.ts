import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  constructor(private ref:ElementRef, private renderer:Renderer2) { }
  @Input() appBackground:string='';

  ngOnInit(): void {
    // this.ref.nativeElement.style.background = 'red'
     this.renderer.setStyle(this.ref.nativeElement,'background-color',this.appBackground)
  }

}
