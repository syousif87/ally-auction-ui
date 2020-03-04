import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuctionItemModel } from '../models/auction-item.model';

@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  constructor(private httpClient: HttpClient) { }

  public getAllAuctions(): Observable<any>  {
    var url = 'http://127.0.0.1:9090/auctionItems';

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

  handleError(error: any) {
    return Observable.throw(error);
  }
}
