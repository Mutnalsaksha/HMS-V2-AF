import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingmanagmentComponent } from './bookingmanagment/bookingmanagment.component';
import { NavComponent } from './nav/nav.component';
import { ServicesComponent } from './services/services.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { UserComponent} from "./Users/user/user.component";
import { AddUserComponent} from "./Users/add-user/add-user.component";
import { AddSrComponent} from "./SR/add-sr/add-sr.component";
import { ReportComponent} from "./Reports/report/report.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'nav',
    component: NavComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'bookingmanagment', component: BookingmanagmentComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'home', component: HomeComponent },
      {path: 'Dashboard/login', component: LoginComponent},
      {path: 'user', component: UserComponent},
      {path: 'add-user', component: AddUserComponent},
      {path: 'add-sr', component: AddSrComponent},
      {path: 'report', component:ReportComponent}
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
