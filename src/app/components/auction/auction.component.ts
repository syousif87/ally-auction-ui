import { Component, OnInit } from '@angular/core';

import { AuctionService } from 'src/app/services/auction.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { AuctionItemModel } from 'src/app/models/auction-item.model';
import { HttpErrorResponse } from '@angular/common/http';
import { AuctionDataService } from 'src/app/services/auction-data.service';
import { ItemModel } from 'src/app/models/item.model';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.sass']
})
export class AuctionComponent implements OnInit {
  selectedAuctionId: string = undefined;

  get bidderName(): string {
    return this.authService.bidderName || '';
  }

  get auctions(): Array<AuctionItemModel> {
    return this.dataService.auctions;
  }

  constructor(private auctionService: AuctionService,
              private authService: AuthService,
              private dataService: AuctionDataService,
              private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.bidderName || this.authService.bidderName === '') {
      this.router.navigate(['']);
    } else {
      this.updateList();
    }
  }

  private updateList() {
    this.auctionService.getAllAuctions().subscribe( (resp: Array<AuctionItemModel>) => {
      this.dataService.auctions = resp || [];
    }, (errResp: HttpErrorResponse) => {
      if (errResp && errResp.error) {
        alert(errResp.error.message);
      }
    });
  }

  private reset() {
    this.dataService.auctions = [];
    this.updateList();
  }

  public auctionClicked(auction: AuctionItemModel) {
    this.selectedAuctionId = auction.auctionItemId;
  }

  public generateRandomAuctionItem() {
    var item: ItemModel = new ItemModel();
    item.itemId = 'abcd';
    item.description = 'item description';

    var auctionItem = new AuctionItemModel();
    auctionItem.item = item;
    auctionItem.currentBid = 0;
    auctionItem.reservePrice = Math.floor(Math.random() * 1000 + 1000);

    this.auctionService.postAuction(auctionItem).subscribe(resp => {
      if (resp) {
        this.reset();
      }
    }, () => {
      alert('error');
    })
  }

  public error(reset) {
    if (reset) {
      this.reset();
    }
  }

}
