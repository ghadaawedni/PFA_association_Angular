import { Component, OnInit } from '@angular/core';
import {NavBarService} from '../../nav-bar/nav-bar.service';
import {Events} from '../../models/Events';
import {EventsService} from '../../services/Events/events.service';

@Component({
  selector: 'app-manifestation',
  templateUrl: './manifestation.component.html',
  styleUrls: ['./manifestation.component.css']
})
export class ManifestationComponent implements OnInit {

  events: Events [] = [];
  constructor(public nav: NavBarService, private eventService: EventsService) { }

  ngOnInit(): void {
    this.nav.show();
    this.events = this.eventService.getEvents();
  }

}
