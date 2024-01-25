import { Component, Input } from '@angular/core';
import { Member } from '../../Models/member';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrl: './member-card.component.css',
})
export class MemberCardComponent {
  @Input() member: Member | null = null;
}
