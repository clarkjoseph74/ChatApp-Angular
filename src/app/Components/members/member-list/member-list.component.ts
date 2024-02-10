import { Component, OnInit } from '@angular/core';
import { Member } from '../../../Models/member';
import { MemberService } from '../../../Services/member.service';
import { Pagination } from '../../../Models/pagination';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrl: './member-list.component.css',
})
export class MemberListComponent implements OnInit {
  members: Member[] = [];
  pagination: Pagination | undefined;
  pageNumber = 1;
  pageSize = 3;
  constructor(private memberService: MemberService) {}
  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.memberService
      .getMembers(this.pageNumber, this.pageSize)
      .subscribe((result) => {
        this.members = result.result;
        this.pagination = result.pagination;
        console.log(this.pagination.totalItems);
      });
  }

  onPageChange(event: { pageIndex: number; pageSize: number }): void {
    this.pageNumber = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadMembers();
  }
}
