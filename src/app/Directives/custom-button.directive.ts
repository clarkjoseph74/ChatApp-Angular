import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[customButton]',
})
export class CustomButtonDirective implements OnInit {
  @Input() mainColor: string = '';
  @Input() hoverColor: string = '';
  @Input() textColor: string = '';
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.addClass(
    //   this.el.nativeElement,
    //   'flex items-center justify-center gap-1 px-2 py-1 rounded-md cursor-pointer'
    // );
    this.renderer.addClass(this.el.nativeElement, 'flex');
    this.renderer.addClass(this.el.nativeElement, 'items-center');
    this.renderer.addClass(this.el.nativeElement, 'justify-center');
    this.renderer.addClass(this.el.nativeElement, 'gap-1');
    this.renderer.addClass(this.el.nativeElement, 'px-2');
    this.renderer.addClass(this.el.nativeElement, 'rounded-md');
    this.renderer.addClass(this.el.nativeElement, 'cursor-pointer');
    this.renderer.addClass(this.el.nativeElement, this.mainColor);
    this.renderer.addClass(this.el.nativeElement, 'text-white');
  }

  @HostListener('mouseenter') onMouseEnter() {
    // this.hover(true);

    this.renderer.addClass(this.el.nativeElement, this.hoverColor);
    this.renderer.addClass(this.el.nativeElement, this.textColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.addClass(this.el.nativeElement, this.mainColor);
    this.renderer.addClass(this.el.nativeElement, 'text-white');
  }

  // private hover(isHovered: boolean) {
  //   const bgColor = isHovered ? this.mainColor : this.hoverColor;
  //   const textColor = isHovered ? this.textColor : 'text-white';

  //   this.renderer.addClass(this.el.nativeElement, bgColor);
  //   this.renderer.addClass(this.el.nativeElement, textColor);

  //   // Remove the opposite classes to avoid conflicts
  //   const oppositeBgColor = isHovered ? this.hoverColor : this.mainColor;
  //   const oppositeTextColor = isHovered ? 'text-white' : this.textColor;

  //   this.renderer.removeClass(this.el.nativeElement, oppositeBgColor);
  //   this.renderer.removeClass(this.el.nativeElement, oppositeTextColor);
  // }
}
