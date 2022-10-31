import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bankapp';
  

  login(){
    this.router.navigateByUrl('signup')
  }

  // acc(){
  //   this.router.navigateByUrl('acc')
  // }
  savings(){
    this.router.navigateByUrl('save')
  }
  support(){
    this.router.navigateByUrl('support')
  }
  settings(){
    this.router.navigateByUrl('settings')
  }

  home(){
    this.router.navigateByUrl('home')
  }

  constructor(private router: Router) { }

}
