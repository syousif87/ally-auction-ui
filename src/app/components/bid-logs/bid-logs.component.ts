import { Component, OnInit } from '@angular/core';
import { BidModel } from 'src/app/models/bid.model';
import { AuctionService } from 'src/app/services/auction.service';

@Component({
  selector: 'app-bid-logs',
  templateUrl: './bid-logs.component.html',
  styleUrls: ['./bid-logs.component.sass']
})
export class BidLogsComponent implements OnInit {
  logs: Array<BidModel> = [];

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.auctionService.getAllBids().subscribe( resp => {
      this.logs = resp;
    })
  }

  public getString(obj: any): string {
    return JSON.stringify(obj);
  }

}
