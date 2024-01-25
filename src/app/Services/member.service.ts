import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Member } from '../Models/member';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: localStorage.getItem('user')
      ? 'Bearer ' + JSON.parse(localStorage.getItem('user')!).token
      : 'null',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getMembers() {
    return this.http.get<Member[]>(this.apiUrl + 'users', httpOptions);
  }
  getMember(username: string) {
    return this.http.get<Member>(
      this.apiUrl + 'users/' + username,
      httpOptions
    );
  }
}
