import { TestBed } from '@angular/core/testing';

import { AuctionDataService } from './auction-data.service';
import { AuctionItemModel } from '../models/auction-item.model';

describe('AuctionDataService', () => {
  let service: AuctionDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuctionDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it ('should return empty array', () => {
    expect(service.auctions.length).toBe(0);
  })

  it ('should return auction item from array', () => {
    var auctionItem = new AuctionItemModel;
    auctionItem.auctionItemId = 'dev';
    service.auctions.push(auctionItem);
    expect(service.get('dev')).toBeTruthy;
    expect(service.auctions.length).toBe(1);
  })
});
