import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { AuctionComponent } from './components/auction/auction.component';
import { BidLogsComponent } from './components/bid-logs/bid-logs.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'auctions', component: AuctionComponent },
  { path: 'bid-log', component: BidLogsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
