import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Member } from '../Models/member';
import { Observable, map, of, pipe } from 'rxjs';
import { Photo } from '../Models/photo';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  apiUrl = environment.apiUrl;
  members: Member[] = [];
  constructor(private http: HttpClient) {}

  getMembers(): Observable<Member[]> {
    if (this.members.length > 0) return of(this.members);
    return this.http.get<Member[]>(this.apiUrl + 'users').pipe(
      map((data: Member[]) => {
        this.members = data;
        return data;
      })
    );
  }
  getMember(username: string): Observable<Member> {
    const member = this.members.find((m) => m.username === username);
    if (member !== undefined) return of(member);
    return this.http.get<Member>(this.apiUrl + 'users/name/' + username);
  }

  updateMember(member: Member) {
    return this.http.put<Member>(this.apiUrl + 'users/', member).pipe(
      map(() => {
        const index = this.members.indexOf(member);
        this.members[index] = member;
      })
    );
  }

  addPhoto(formData: FormData) {
    return this.http.post<Photo>(this.apiUrl + 'users/add-photo', formData);
  }

  setMainPhoto(photoId: number) {
    return this.http.put(this.apiUrl + 'users/main-photo/' + photoId, {});
  }

  deletePhoto(photoId: number) {
    return this.http.delete(this.apiUrl + 'users/delete-photo/' + photoId);
  }
}
