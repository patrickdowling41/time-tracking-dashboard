import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-tracking-dashboard-app';
  cardList: string[] = [
    "card1",
    "card2",
    "card3",
    "card4",
    "card5",
    "card6"
  ]
}
