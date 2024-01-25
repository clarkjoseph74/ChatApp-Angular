import { Component, OnInit } from '@angular/core';
import { Member } from '../../../Models/member';
import { MemberService } from '../../../Services/member.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  constructor(private memberService: MemberService) {}
  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService
      .getMembers()
      .subscribe((members) => (this.members = members));
  }
}