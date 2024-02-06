import { Component, OnInit } from '@angular/core';
import { Member } from '../../../Models/member';
import { MemberService } from './../../../Services/member.service';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem } from '@daelmaak/ngx-gallery';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
})
export class MemberDetailComponent implements OnInit {
  member: Member = {} as Member;
  images: string[] = [];
  constructor(
    private memberService: MemberService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    this.memberService
      .getMember(this.route.snapshot.paramMap.get('username')!)
      .subscribe({
        next: (res) => {
          this.member = res;
          res.photos.map((photo) => this.images.push(photo.url));
        },
        complete: () => {},
      });
  }
}
