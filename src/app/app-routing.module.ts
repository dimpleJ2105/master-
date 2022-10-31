import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { DepositComponent } from './deposit/deposit.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SavingsComponent } from './savings/savings.component';
import { SettingsComponent } from './settings/settings.component';
import { SupportComponent } from './support/support.component';


const routes: Routes = [
  {path:'acc', component:(AccountsComponent)},
  {path:'deposit', component:(DepositComponent)},
  {path:'save', component:(SavingsComponent)},
  {path:'support', component:(SupportComponent)},
  {path:'settings', component:(SettingsComponent)},
  {path:'home', component:(HomeComponent)},
  {path:'login', component:(LoginComponent)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
