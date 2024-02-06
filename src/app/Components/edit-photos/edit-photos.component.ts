import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Member } from '../../Models/member';
import { MemberService } from '../../Services/member.service';
import { ToastrService } from 'ngx-toastr';
import { Photo } from './../../Models/photo';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-edit-photos',
  templateUrl: './edit-photos.component.html',
  styleUrl: './edit-photos.component.css',
})
export class EditPhotosComponent {
  status: 'initial' | 'uploading' | 'success' | 'fail' | 'selected' = 'initial';
  @Input() member: Member = {} as Member;
  imageUrl: string | ArrayBuffer | null | undefined = null;
  @ViewChild('imageInput') imageInput: ElementRef | undefined;
  file: File | null = null;
  constructor(
    private memberService: MemberService,
    private toastr: ToastrService
  ) {}
  handleFileInput(): void {
    const file = this.imageInput?.nativeElement?.files?.[0];
    if (file) {
      this.file = file;
      this.status = 'selected';
      const reader = new FileReader();
      reader.onload = (e) => {
        this.imageUrl = e.target?.result;
      };
      reader.readAsDataURL(file);
    } else {
      this.imageUrl = null;
      this.status = 'initial';
    }
  }
  uploadImage(): void {
    if (this.file) {
      this.status = 'uploading';
      console.log(this.imageInput?.nativeElement?.files?.[0]);
      var formData = new FormData();
      formData.append('file', this.file);
      this.memberService.addPhoto(formData).subscribe({
        next: (data: Photo) => {
          console.log(data);
          this.status = 'success';
          this.member.photos.push(data);
        },
        error: (error) => (this.status = 'fail'),
        complete: () => {
          this.file = null;
          this.imageUrl = null;
        },
      });
    } else {
      this.toastr.info('Please select an image to upload!');
    }
  }
  setMainPhoto(id: number): void {
    this.memberService.setMainPhoto(id).subscribe({
      next: (data) => {
        this.toastr.success('Main Photo Updated Successfully');
        let newMain = this.member.photos.find((photo) => photo.id === id);
        this.member.imageUrl = newMain?.url!;
        newMain!.isMain = true;
      },
      error: (err: HttpErrorResponse) => this.toastr.error(err.message),
    });
  }

  deletePhoto(id: number): void {
    this.memberService.deletePhoto(id).subscribe({
      next: () => {
        this.toastr.success('Photo Deleted Successfully');
        const photoIndex = this.member.photos.findIndex(
          (photo) => photo.id === id
        );
        if (photoIndex !== -1) {
          this.member.photos.splice(photoIndex, 1);
        }
      },
      error: (err: HttpErrorResponse) => {
        this.toastr.error(err.message);
      },
    });
  }
}
