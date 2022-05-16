import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss'],
})
export class CardHomeComponent implements OnInit {
  @Input() numberOfPeople !: number;
  @Input() price !: number;
  @Input() thumbnailPath !: string;
  @Input() routeName !: string;
  @Input() routeId !: string;
  constructor() { }

  ngOnInit() { }

}
