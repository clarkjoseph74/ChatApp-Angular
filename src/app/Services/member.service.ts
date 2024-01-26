import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Member } from '../Models/member';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<Member[]>(this.apiUrl + 'users');
  }
  getMember(username: string) {
    return this.http.get<Member>(this.apiUrl + 'users/name/' + username);
  }
}
