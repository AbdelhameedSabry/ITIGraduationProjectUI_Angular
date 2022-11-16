import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHidden]'
})
export class HiddenDirective implements OnChanges {
  @Input('appHidden') displayVlaue: string = "none";
  constructor(public elemtRef: ElementRef) {
    this.elemtRef.nativeElement.style.display = `${this.displayVlaue}`
  }

  ngOnChanges(): void {
    this.elemtRef.nativeElement.style.display = `${this.displayVlaue}`
  }

}
