import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  @Input() clickAction: any = () => {};
  @Input() IconName: string = '';
  @Input() text: string = '';
  @Input() color: string = '';
}
