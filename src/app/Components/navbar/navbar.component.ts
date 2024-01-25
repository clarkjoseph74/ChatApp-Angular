import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../Services/account.service';
import { Observable } from 'rxjs';
import { User } from '../../Models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  model: any = {};
  user: User | null = null;
  loggedIn: boolean = false;
  constructor(
    private accountService: AccountService,
    private router: Router,
    private toaster: ToastrService
  ) {
    this.accountService.isLoggedIn.subscribe(
      (value) => (this.loggedIn = value)
    );
    this.accountService.currentUser$.subscribe((value) => (this.user = value));
  }
  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  login() {
    this.accountService.login(this.model).subscribe((value: User) => {
      this.router.navigateByUrl('/members');
      this.toaster.success(
        'Welcome ' + value.username + ' logged in successfully'
      );
    });
  }
  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
