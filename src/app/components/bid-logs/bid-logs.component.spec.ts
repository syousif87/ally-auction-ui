import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BidLogsComponent } from './bid-logs.component';
import { AuctionService } from 'src/app/services/auction.service';

describe('BidLogsComponent', () => {
  let component: BidLogsComponent;
  let fixture: ComponentFixture<BidLogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidLogsComponent ],
      imports: [ HttpClientTestingModule ],
      providers: [ AuctionService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
