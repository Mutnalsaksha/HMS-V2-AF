import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Usersservice} from "../../service/users.service";
import * as moment from 'moment';
import 'moment-timezone';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  searchText: string='';
  sortedData: any[]=[];
  users: any[] = [];
  filter: string = 'all';

  constructor(private usersservice: Usersservice, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filter = params['filter'] || 'all';
      this.loadUsers();
    });
  }

  loadUsers(): void {
    this.usersservice.getusers().subscribe(
      (data: any) => {
        this.users = data;
        this.sortedData = this.applyFilter(data);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }


  applyFilter(data: any[]): any[] {
    const today = moment.tz('Asia/Kolkata');

    if (this.filter === '7days') {
      const last7Days = today.clone().subtract(7, 'days').startOf('day');
      return data.filter(user => {
        const userDate = moment.tz(user.date, 'Asia/Kolkata');
        return userDate.isBetween(last7Days, today, null, '[]'); // inclusive of start and end date
      });
    } else if (this.filter === '30days') {
      const last30Days = today.clone().subtract(30, 'days').startOf('day');
      return data.filter(user => {
        const userDate = moment.tz(user.date, 'Asia/Kolkata');
        return userDate.isBetween(last30Days, today, null, '[]'); // inclusive of start and end date
      });
    } else {
      return data;
    }
  }


  sortByDate(data: any[]): any[] {
    return data.sort((a: any, b: any) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }

  getHeader() {
    if (this.filter === '7days') {
      return 'Service Requests for Last 7 Days';
    } else if (this.filter === '30days') {
      return 'Service Requests for Last 30 Days';
    } else {
      return 'All Service Requests';
    }
  }
}
