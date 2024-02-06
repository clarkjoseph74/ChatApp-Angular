import { Component, OnInit, ViewChild } from '@angular/core';
import { Member } from '../../Models/member';
import { User } from '../../Models/user';
import { AccountService } from '../../Services/account.service';
import { MemberService } from './../../Services/member.service';
import { take } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-edit',
  templateUrl: './member-edit.component.html',
  styleUrl: './member-edit.component.css',
})
export class MemberEditComponent implements OnInit {
  @ViewChild('editProfileForm') editProfileForm: any;
  member: Member = {} as Member;
  user: User | null = null;
  constructor(
    private accService: AccountService,
    private memberService: MemberService,
    private toastr: ToastrService
  ) {
    accService.currentUser$
      .pipe(take(1))
      .subscribe((user) => (this.user = user));
  }

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember(): void {
    this.memberService
      .getMember(this.user?.username!)
      .subscribe((mem) => (this.member = mem));
  }

  updateInfo() {
    this.memberService.updateMember(this.member).subscribe(() => {
      this.toastr.success('Profile updated successfully ');
      this.editProfileForm.reset(this.member);
    });
    console.log(this.member);
  }
}
