// frontend/src/app/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { Usersservice } from '../service/users.service';

@Component({
  selector: 'app-bookingmanagment',
  templateUrl: './bookingmanagment.component.html',
  styleUrls: ['./bookingmanagment.component.css'],
})
export class BookingmanagmentComponent implements OnInit {
  searchText: string = '';
  users: any[] = [];
  sortedData: any[]=[];
  editingService: any= null;
  updateMessage: string = '';
  editFormPosition = { top: 0, left: 0 };

  private services: any;
  private service: any;
  constructor(private usersservice: Usersservice) { }


  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.usersservice.getusers().subscribe(
      (data: any) => {
        this.users = data;
        this.sortedData = this.sortByDate(data);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  sortByDate(data: any[]): any[] {
    return data.sort((a: any, b: any) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return dateB - dateA;
    });
  }


  editService(user: any, event: MouseEvent):void {
    this.editingService = {...user};
    const targetElement = event.currentTarget as HTMLElement;
    const rect = targetElement.getBoundingClientRect();
    this.editFormPosition.top = rect.top + window.scrollY;
    this.editFormPosition.left = rect.left + window.scrollX;
  }

  deleteService(user: any): void {
    if (confirm('Are you sure you want to delete this service request?')) {
      this.usersservice.deleteService(user._id).subscribe(
        () => {
          this.users = this.users.filter((u) => u._id !== user._id);
          this.sortedData = this.users;
        },
        (error) => {
          console.error('Error deleting user:', error);
        }
      );
    }
  }


  updateService(): void {
    if (this.editingService) {
      this.usersservice.updateService(this.editingService).subscribe(
        (updatedService) => {
          const index = this.users.findIndex((u) => u._id === updatedService._id);
          if (index !== -1) {
            this.users[index] = updatedService;
          } else {
            // If the service is new, add it to the users array
            this.users.push(updatedService);
          }
          this.sortedData = this.sortByDate(this.users);
          this.closeForm();
          this.updateMessage = 'User updated successfully';
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }
  }

  closeForm() {
    this.editingService = null;
    this.updateMessage = '';
  }
}
