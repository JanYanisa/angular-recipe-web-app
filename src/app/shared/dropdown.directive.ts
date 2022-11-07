import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
} from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;

  //click on the specific button to close
  // @HostListener('click') toggleOpen() {
  //   this.isOpen = !this.isOpen;
  // }

  // hover case
  // @HostListener('mouseenter') mouseover(evenData: Event) {
  //   this.isOpen = true;
  // }
  // @HostListener('mouseleave') mouseleave(evenData: Event) {
  //   this.isOpen = false;
  // }

  // close from anywhere
  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target)
      ? !this.isOpen
      : false;
  }
  constructor(private elRef: ElementRef) {}
}
