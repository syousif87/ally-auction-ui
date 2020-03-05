import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AuctionDetailsComponent } from './auction-details.component';
import { AuctionItemModel } from 'src/app/models/auction-item.model';
import { AuthService } from 'src/app/services/auth.service';
import { AuctionDataService } from 'src/app/services/auction-data.service';
import { AuctionService } from 'src/app/services/auction.service';

describe('AuctionDetailsComponent', () => {
  let component: AuctionDetailsComponent;
  let fixture: ComponentFixture<AuctionDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionDetailsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ AuctionService, AuthService, AuctionDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render div', () => {
    const fixture = TestBed.createComponent(AuctionDetailsComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled).toBeTruthy();
  });

  it('should have properties', () => {
    component.auctionId = 'dev';
    var auctionItem = new AuctionItemModel();
    auctionItem.bidderName = 'dev';
    auctionItem.currentBid = 1000;
    component.auction = auctionItem;
    expect(component.bidderName).toBe('dev');
    expect(component.currentBid).toBe(1000);
    expect(component.isCurrentBidder).toBe(false);
  });
});
