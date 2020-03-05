import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { AuctionItemModel } from 'src/app/models/auction-item.model';
import { AuthService } from 'src/app/services/auth.service';
import { AuctionService } from 'src/app/services/auction.service';
import { BidModel } from 'src/app/models/bid.model';
import { AuctionDataService } from 'src/app/services/auction-data.service';

@Component({
  selector: 'auction-details',
  templateUrl: './auction-details.component.html',
  styleUrls: ['./auction-details.component.sass']
})
export class AuctionDetailsComponent implements OnInit, OnChanges {
  @Input() auctionId: string;
  @Output() error: EventEmitter<boolean> = new EventEmitter<boolean>();

  public bidPrice: number = 0;
  public auction: AuctionItemModel;

  get isCurrentBidder(): boolean {
    return this.auction.bidderName === this.authService.bidderName;
  }

  constructor(private authService: AuthService,
              private auctionService: AuctionService,
              private dataService: AuctionDataService) { }

  ngOnInit(): void {
    if (this.auctionId) {
      this.auction = this.dataService.get(this.auctionId);
    }
  }

  ngOnChanges(): void {
    if (this.auctionId) {
      this.auction = this.dataService.get(this.auctionId);
    }
  }

  public getString(auction: AuctionItemModel): string {
    return JSON.stringify(auction);
  }

  public bid() {
    var bid = new BidModel(this.auction.auctionItemId, this.bidPrice, this.authService.bidderName);
    this.auctionService.bid(bid).subscribe((auctionItem: AuctionItemModel) => {
      this.auction = auctionItem;
    }, (errResp: HttpErrorResponse) => {
      errResp && errResp.error ? alert(errResp.error.message) : alert('Error processing bid.');
      this.error.next(true);
    });
  }
}
