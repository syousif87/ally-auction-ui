import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'ally-auction-ui';
  auctions: Array<any>;
  bidderName: string = '';

  constructor() {}
}
