import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { AuctionDataService } from 'src/app/services/auction-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public bidderName: string = '';

  constructor(private authService: AuthService,
              private dataService: AuctionDataService,
              private router: Router) {}

  ngOnInit(): void {
    this.dataService.auctions = [];
  }

  public login() {
    this.authService.bidderName = this.bidderName;
    this.router.navigate(['auctions']);
  }
}