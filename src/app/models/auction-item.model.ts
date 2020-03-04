import { ItemModel } from './item.model';

export class AuctionItemModel {
  public auctionItemId: string;
  public currentBid: string;
  public reservePrice: string;
  public bidderName: string;
  public item: ItemModel;

  constructor(json: Object) {
    var keys = Array.from(Object.keys(json));

    keys.forEach(key => {
      this.setProperty(key, json[key]);
      if (key !== 'item') {
        this[key] === json[key];
      } else {
        this.item = new ItemModel(json[key]);
      }
    });
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