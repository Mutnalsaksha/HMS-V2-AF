import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showSubOptions: { [key: string]: boolean } = {
    servicesRequests: false,
    users: false,
    reports: false
    // Add more main options here if needed
  };

  toggleSubOptions(option: string) {
    // Toggle the selected option
    this.showSubOptions[option] = !this.showSubOptions[option];
    // Hide other sub-options if they are not the selected one
    for (const key in this.showSubOptions) {
      if (key !== option) {
        this.showSubOptions[key] = false;
      }
    }
  }


}
