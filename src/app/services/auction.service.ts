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

  public postAuction(auction: AuctionItemModel) {
    var url = environment.apiUrl + 'auctionItems';

    return this.httpClient.post(url, auction).pipe(map((res: any) => res));
  }

  public bid(bid: BidModel) {
    var url = environment.apiUrl + 'bids';

    return this.httpClient.post(url, bid).pipe(map((res: any) => res));
  }

  handleError(error: any) {
    return Observable.throw(error);
  }
}
