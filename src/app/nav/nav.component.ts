import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { ToastrService } from 'ngx-toastr';
import { MembersService } from '../_services/members.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(
    public accountService: AccountService,
    private router: Router,
    private toastr: ToastrService,
    private memberService: MembersService
  ) {}
  ngOnInit(): void {}

  login() {
    this.accountService.login(this.model).subscribe({
      next: (response) => {
        console.log('uspesno logovanje!');
        // let userParams = this.memberService.resetUserParams();
        // console.log(userParams);
        this.router.navigateByUrl('/members');
      },
      error: (error) => {
        console.log(error);
        this.toastr.error(error.error);
      },
    });
  }

  logout() {
    this.accountService.logout();
    this.router.navigateByUrl('/');
  }
}
