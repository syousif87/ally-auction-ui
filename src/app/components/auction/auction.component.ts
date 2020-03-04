import { Component, OnInit } from '@angular/core';

import { AuctionService } from 'src/app/services/auction.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.sass']
})
export class AuctionComponent implements OnInit {
  auctions: Array<any> = [];

  get bidderName(): string {
    return this.authService.bidderName || '';
  }

  constructor(private auctionService: AuctionService,
              private authService: AuthService,
              private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.bidderName || this.authService.bidderName === '') {
      this.router.navigate(['']);
    }
  }

  public getAuctions() {
    this.auctionService.getAllAuctions().subscribe( res => {
      this.auctions = res;
    });
  }

  public getString(auction: any) {
    return JSON.stringify(auction);
  }

}
