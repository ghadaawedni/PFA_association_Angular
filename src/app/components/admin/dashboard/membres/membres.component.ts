import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../nav-bar/nav-bar.service';
import {News} from '../../../models/News';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MemberService} from '../../../services/Member/member.service';
import {Member} from '../../../models/Member';

@Component({
  selector: 'app-membres',
  templateUrl: './membres.component.html',
  styleUrls: ['./membres.component.css']
})
export class MembresComponent implements OnInit {

  x = false;
  members: Member [] = [];
    addForm: FormGroup = this.fb.group({
    firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      post: ['', Validators.required],
    url : ['', Validators.required],
  });
  constructor(public nav: NavBarService,  private fb: FormBuilder, private memberService: MemberService) {
    this.nav.hide();
  }

  ngOnInit(): void {
    this.members = this.memberService.getMembers();
  }

  show()
  {
    this.x = true;
  }
  addMember(){
    this.x = false;
    const str = this.addForm.value.url;
    console.log(str);
    const splitted = str.split('\\', 3);
    console.log(splitted[2]);
    const mem = new Member(this.addForm.value.firstname, this.addForm.value.firstname, this.addForm.value.post, splitted[2]);
    console.log(mem);
    this.memberService.addMember(mem);
  }
  OnDelete(n: Member)
  {
    this.memberService.delete(n);
  }
  OnUpdate(n: Member){
    console.log(n);
  }
}
