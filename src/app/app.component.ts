import {Component, OnInit} from '@angular/core';
import {SwapiService} from "./core/swapi.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  people = [];

  constructor (private swapiService:SwapiService) {

  }

  ngOnInit(): void {
    this.swapiService
      .getPeopleList()
      .subscribe((results) => this.people = results);
  }
}
