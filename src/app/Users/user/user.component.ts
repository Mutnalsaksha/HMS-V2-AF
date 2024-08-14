import { Component, OnInit } from '@angular/core';
import { UserService} from "../../caretakers/user.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  users: any[] = [];
  editingUser: any= null;
  editFormPosition = { top: 0, left: 0 };
  updateMessage: string = '';
  passwordFieldType: string = 'password';
  searchText: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers() {
    this.userService.getUsers()
      .subscribe(
        (users: any[]) => {
          this.users = users;
        },
        (error) => {
          console.error('Error fetching users:', error);
        }
      );
  }

  editUser(user: any,  event: MouseEvent) {
    // Implement edit functionality
    this.editingUser = { ...user };
    const targetElement = event.currentTarget as HTMLElement;
    const rect = targetElement.getBoundingClientRect();
    this.editFormPosition.top = rect.top + window.scrollY;
    this.editFormPosition.left = rect.left + window.scrollX;
  }

  updateUser() {
    if (this.editingUser) {
      this.userService.updateUser(this.editingUser).subscribe(updatedUser => {
        // Update the user in the UI after successful update
        const index = this.users.findIndex(u => u._id === updatedUser._id);
        if (index !== -1) {
          this.users[index] = updatedUser;
        }
        this.closeForm();
        this.updateMessage = 'User updated successfully';
      });
    }
  }

  deleteUser(user: any) {
    if (confirm('Are you sure you want to delete this user?')) {
    // Delete the user using the UserService
    this.userService.deleteUser(user._id).subscribe(() => {
      // Remove the user from the UI after successful deletion
      this.users = this.users.filter(u => u._id !== user._id);
    });
  }}

  closeForm() {
    // Reset the editingUser to null to close the edit form
    this.editingUser = null;
  }

  togglePasswordVisibility() {
    this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
  }
}
