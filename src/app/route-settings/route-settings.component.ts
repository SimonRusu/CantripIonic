import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-route-settings',
  templateUrl: './route-settings.component.html',
  styleUrls: ['./route-settings.component.scss']
})
export class RouteSettingsComponent implements OnInit {
  @Input() numberOfPeople !: number;
  @Input() date !: string;
  @Input() startingTime !: string;
  constructor() { }

  ngOnInit(): void {
  }

}
