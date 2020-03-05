import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuctionComponent } from './auction.component';
import { AuthService } from 'src/app/services/auth.service';
import { AuctionDataService } from 'src/app/services/auction-data.service';
import { AuctionService } from 'src/app/services/auction.service';

describe('AuctionComponent', () => {
  let component: AuctionComponent;
  let fixture: ComponentFixture<AuctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuctionComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule ],
      providers: [ AuctionService, AuthService, AuctionDataService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
