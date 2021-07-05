import { Component, OnInit } from '@angular/core';
import { NavBarService } from '../../../nav-bar/nav-bar.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {EventsService} from '../../../services/Events/events.service';
import {Events} from '../../../models/Events';


@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.css']
})
export class EvenementsComponent implements OnInit {
  x = false;
  events: Events [] = [];
  addForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
    url : ['', Validators.required],
  });
  constructor(public nav: NavBarService, private fb: FormBuilder, private eventService: EventsService) {
    this.nav.hide();
  }

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }
  show()
  {
    this.x = true;
  }

  addEvent(){
    this.x = false;
    const str = this.addForm.value.url;
    console.log(str);
    const splitted = str.split('\\', 3);
    console.log(splitted[2]);
    // this.today = new Date();
    // // tslint:disable-next-line:no-unused-expression
    // this.today.toISOString().split('T')[0];
    const ev = new Events(this.addForm.value.title, '2021-09-29', this.addForm.value.description, splitted[2]);
    console.log(ev);
    this.eventService.addEvent(ev);
  }

  OnDelete(n: Events)
  {
    console.log(n);
    //  const n = this.news[i];
    this.eventService.delete(n);
  }

}
