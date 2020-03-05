import { Injectable } from '@angular/core';
import { AuctionItemModel } from '../models/auction-item.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionDataService {
  private _auctions: Array<AuctionItemModel> = [];

  get auctions(): Array<AuctionItemModel> {
    return this._auctions;
  }

  set auctions(auctions: Array<AuctionItemModel>) {
    this._auctions = auctions;
  }

  constructor() { }

  public get(auctionId: string) {
    return this.auctions.find(auction => auction.auctionItemId === auctionId);
  }
}
