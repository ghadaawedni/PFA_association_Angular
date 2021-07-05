import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Member} from '../../models/Member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  status;
  members: Member [] = [];

  constructor(private httpClient: HttpClient) {
  }


  addMember(ev: Member) {
    this.httpClient
      .post<any>('http://localhost:8081/member/add', ev)
      .subscribe(() => {
          window.location.reload();
        }, (error) => {
          if (error.status === 400) {
            console.log('error 400 !');
          } else if (error.status === 404) {
            console.log('data invalid');
          }
        }
      );
  }


  getMembers() {
    this.members = [];
    this.httpClient
      .get<any>('http://localhost:8081/member/getMembers')
      .subscribe((data) => {
        data.map(dt => {
          this.members.push(dt);
        });
      });
    console.log(this.members);
    return this.members;
  }

  delete(ev: Member){

    return this.httpClient.delete<any>('http://localhost:8081/member/delete/' + ev.member_id)
      .subscribe(data => {
        window.location.reload();
      });
  }
}
