import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }
  url = 'http://localhost:8055/acc/employee';
  saveAcc(acc: any) {
    return this.http.post(this.url, acc);
  }
}
