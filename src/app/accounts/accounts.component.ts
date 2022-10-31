import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';


@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
 
  // addacc(){
  //   this.router.navigate(['open'], {relativeTo:this.route});
  // }

  deposit(){
    this.router.navigateByUrl('deposit');
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
