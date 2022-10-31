import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Input } from '@angular/core';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  @Input() acc: any;

  getEmpFormData(acc: any) {
    this.user.saveAcc(acc).subscribe((result) => {
      //  (this.posts = result)
      console.warn(acc);
    });
  }
  login() {
    this.router.navigateByUrl('login');
  }

  constructor(private user: AccountService,private router: Router) {}
  ngOnInit(): void {}
}
