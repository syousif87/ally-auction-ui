import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  public bidderName: string = '';

  constructor(private router: Router,
              private authService: AuthService) {}

  ngOnInit(): void {}

  public login() {
    this.authService.bidderName = this.bidderName;
    this.router.navigate(['auctions']);
  }
}