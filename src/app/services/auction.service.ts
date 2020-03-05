import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AuctionItemModel } from '../models/auction-item.model';
import { environment } from '../../environments/environment';
import { BidModel } from '../models/bid.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  constructor(private httpClient: HttpClient) { }

  public getAllAuctions(): Observable<any>  {
    var url = environment.apiUrl + 'auctionItems';

    return this.httpClient.get(url)
      .pipe(
        map((res: any) => {
          var auctionItems: Array<AuctionItemModel> = [];

          if (res && res.length > 0) {
            res.forEach(item => {
              auctionItems.push(new AuctionItemModel(item));
            });
          }

          return auctionItems;
        })
      );
  }

  public getAuction(id: string): Observable<any>  {
    var url = environment.apiUrl + 'auctionItems/' + id;

    return this.httpClient.get(url).pipe(map((res: any) => new AuctionItemModel(res)));
  }

  public postAuction(auction: AuctionItemModel): Observable<any> {
    var url = environment.apiUrl + 'auctionItems';

    return this.httpClient.post(url, auction).pipe(map((res: any) => res));
  }

  public getAllBids(): Observable<any>  {
    var url = environment.apiUrl + 'bids';

    return this.httpClient.get(url)
      .pipe(
        map((res: any) => {
          var bids: Array<BidModel> = [];

          if (res && res.length > 0) {
            res.forEach(item => {
              bids.push(new BidModel(item['auctionItemId'], item['maxAutoBidAmount'], item['bidderName']));
            });
          }

          return bids;
        })
      );
  }

  public bid(bid: BidModel): Observable<any> {
    var url = environment.apiUrl + 'bids';

    return this.httpClient.post(url, bid).pipe(map((res: any) => res));
  }

}
