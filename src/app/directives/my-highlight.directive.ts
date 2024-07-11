import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appMyHighlight]',
  standalone: true
})
export class MyHighlightDirective {
  el:ElementRef;


  constructor(el:ElementRef) { 
    this.el = el
  }

  @HostBinding("style.backgroundColor")
  bgColor="green"

  @HostListener("mouseenter")
  changeFontSize(){
    this.el.nativeElement.style.fontSize ="50px"
  }

  @HostListener("mouseleave")
  resetFontSize(){
    this.el.nativeElement.style.fontSize ="30px"
  }

}
