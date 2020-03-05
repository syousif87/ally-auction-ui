export class BidModel {
  public auctionItemId;
  public maxAutoBidAmount;
  public bidderName;

  constructor(id: string, amount: number, name: string) {
    this.auctionItemId = id;
    this.maxAutoBidAmount = amount;
    this.bidderName = name;
  }
}