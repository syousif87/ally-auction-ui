import { ItemModel } from './item.model';

export class AuctionItemModel {
  public auctionItemId: string;
  public currentBid: number;
  public reservePrice: number;
  public bidderName: string;
  public item: ItemModel;

  constructor(json: Object = undefined) {
    if (json) {
      var keys = Array.from(Object.keys(json));

      keys.forEach(key => {
        if (key !== 'item') {
          this.setProperty(key, json[key]);
        } else {
          this.item = new ItemModel(json[key]);
        }
      });
    }
  }

  private setProperty(key, value) {
    switch(key) {
      case 'auctionItemId':
        this.auctionItemId = value;
        break;

      case 'currentBid':
        this.currentBid = value;
        break;

      case 'reservePrice':
        this.reservePrice = value;
        break;

      case 'bidderName':
        this.bidderName = value;
        break;
    }
  }
}