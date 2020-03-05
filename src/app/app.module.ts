import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuctionService } from './services/auction.service';
import { MaterialModule } from './material.module';
import { LoginComponent } from './components/login/login.component';
import { AuctionComponent } from './components/auction/auction.component';
import { AuthService } from './services/auth.service';
import { AuctionDetailsComponent } from './components/auction/auction-details/auction-details.component';
import { AuctionDataService } from './services/auction-data.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuctionComponent,
    AuctionDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    AuctionService,
    AuthService,
    AuctionDataService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
