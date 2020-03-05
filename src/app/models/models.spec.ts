import { BidModel } from './bid.model';
import { AuctionItemModel } from './auction-item.model';
import { ItemModel } from './item.model';

describe('BidModel', () => {

    it('should parse BidModel', () => {
        const bid = new BidModel('dev', 1, 'dev');
        expect(bid.auctionItemId).toBe('dev');
        expect(bid.bidderName).toBe('dev');
        expect(bid.maxAutoBidAmount).toBeGreaterThan(0);
    });

})

describe('AuctionItemModel', () => {

    it('should parse AuctionItemModel', () => {
        const auctionItem = new AuctionItemModel({ 'auctionItemId' : 'dev', 'currentBid' : 1000, 'reservePrice' : 1000, 'bidderName' : 'dev', 'item' : { 'mock' : 'mock' } });
        expect(auctionItem.auctionItemId).toBe('dev');
        expect(auctionItem.currentBid).toBe(1000);
        expect(auctionItem.reservePrice).toBe(1000);
        expect(auctionItem.bidderName).toBe('dev');
        expect(auctionItem.item).toBeTruthy();
    });

})

describe('ItemModel', () => {

    it('should parse ItemModel', () => {
        const item = new ItemModel({ 'itemId' : 'dev', 'description' : 'dev' });
        expect(item.itemId).toBe('dev');
        expect(item.description).toBe('dev');
    });

})
